import React from 'react';
import styled from 'styled-components';
import './styles/index.css';
import bot from './assistant.png';


const Wrapper = styled.div`
		background: #404040;
		margin:0 auto;
		padding: 20px;
		border-radius: 12px;
		box-shadow: 0 0 9px 6px #c0b7b7;
		text-align: center;
		
`

function App() {
	return (
			<Wrapper>
				<img src={bot} alt="Pluralsight Bot"/>
				<h1 style={{margin:'0'}}>It worked</h1>
				<p>The App Was Deployed Successfully!</p>

			</Wrapper>
	);
}

export default App;
