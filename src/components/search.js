import React, { Component } from "react";
import "../static/css/style.css"
import {classList,toggleClass} from 'react-classlist-helper';

class Search extends Component{
    state = {
        searchBtn: false,
        inputBox: false
    }

    clickHandler = () => {
        this.setState({
            searchBtn: !this.state.searchBtn,
            inputBox: !this.state.inputBox
        })
        console.log(this.state.searchBtn)
    }
    
    render(){
        return (
            <div>
                <form id="content">
                    <input type="text" name="input" className={classList("input", toggleClass("square",this.state.inputBox))} id="search-input" />
                    <button onClick={this.clickHandler} type="reset" className={classList("search", toggleClass("close",this.state.searchBtn))} id="search-btn" ></button>
                </form>
            </div>
        );
        
    }
}

export default Search;