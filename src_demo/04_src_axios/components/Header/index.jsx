import React, { Component } from 'react'
export default class Header extends Component {
render() {

return <div style={{ backgroundColor: '#80bde8' , overflow: 'hidden' }}>
    <a style={{ textDecoration: 'none' , fontSize: 30, color: 'black' }}
        href="http://127.0.0.1:5500/practice/popular.html"> Popular</a>
    <a style={{ textDecoration: 'none' , fontSize: 30 }} href="http://127.0.0.1:5500/practice/battle.html"> Battle</a>
    <h2 style={{ textAlign: 'center' }}>
        <a style={{ textDecoration: 'none' }} href="http://127.0.0.1:5500/practice/popular.html?language=none"> All </a>
        <a style={{ textDecoration: 'none' }} href="http://127.0.0.1:5500/practice/popular.html?language=Javascript">
            JavaScript </a>
        <a style={{ textDecoration: 'none' }} href="http://127.0.0.1:5500/practice/popular.html?language=Ruby"> Ruby
        </a>
        <a style={{ textDecoration: 'none' }} href="http://127.0.0.1:5500/practice/popular.html?language=Java"> Java
        </a>
        <a style={{ textDecoration: 'none' }} href="http://127.0.0.1:5500/practice/popular.html?language=Css"> Css </a>
        <a style={{ textDecoration: 'none' }} href="http://127.0.0.1:5500/practice/popular.html?language=Python"> Python
        </a>
    </h2>
</div>
}
}