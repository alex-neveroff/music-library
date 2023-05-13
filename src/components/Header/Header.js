import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <img src="" alt="" />
        <nav>
          <ul>
            <li>
              <a href="./">Collection</a>
            </li>
            <li>
              <a href="./">Listen</a>
            </li>
            <li>
              <a href="./">Listened</a>
            </li>
            <li>
              <a href="./">Search</a>
            </li>
          </ul>
        </nav>
        <button type="button">Authorization</button>
      </header>
    );
  }
}
