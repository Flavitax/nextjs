import React, { Component } from 'react'
import './conversor.css';

export default class Conversor extends Component {

    constructor(props) {
        super(props)

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
            currencies: []
        }

        this.converter = this.converter.bind(this)

    }

    converter() {

        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `http://free.currencyconverterapi.com/api/v5/convert?q=${de_para}&compact=y&apiKey=4c97ed167d7652229d78`
        
        fetch(url).then(res=>{

            return res.json()

        }).then(json=> {

            let cot = json[de_para].val
            let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cot).toFixed(2)
            this.setState({ moedaB_valor })

        })

    }

    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} vers {this.props.moedaB}</h2>
                <input type="text" placeholder="Montant" onChange={(e)=>{this.setState({moedaA_valor: e.target.value})}}></input>
                <input type="button" value="Convertir" onClick={this.converter}></input>
                <p>{this.state.moedaB_valor}</p>
            </div>
        )
    }
}