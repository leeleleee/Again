import React from 'react';
import { NavLink } from 'react-router-dom';
import $ from "jquery";

class Left extends React.Component {
	constructor() {
    	super();
        this.state = {
        	scrollTop: 0,
            width: 0
        }
    }
    
    componentDidMount = () => {
    	window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnMount = () => {
    	window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = (e) => {
        const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
        this.setState({
            scrollTop,
            width : $(window).width()
        })
    }

    render() {
    	return(
            <div
                className={
                    "issueLeft" +
                    (this.state.width > 1500&&this.state.scrollTop > 900&&this.state.scrollTop < 3500 ? ' on':'') +
                    (this.state.width <= 1500&&this.state.width >= 1300&&this.state.scrollTop > 750&&this.state.scrollTop < 2900 ? ' on':'')
                }
                onScroll={
                    this.handleScroll
                }
            >
                <img src="images/hL.jpg"/>
                <p className="tit">2020 summer</p>
                <a href="#"><p className="link1">PDF 보기<span></span></p></a>
                <a href="#"><p className="link2">사보 전체보기</p></a>
            </div>
      );
    }
}

export default Left;