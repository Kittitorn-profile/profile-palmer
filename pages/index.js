import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
	padding: 0.5em;
	margin-top: 0.5em;
	color: #000000;
	width: 100%;
	background: #ffffff;
	border: 1px solid #000;
	border-radius: 3px;
`;

const Button = styled.button`
	padding: 0.5em;
	margin-top: 0.5em;
	color: #fff;
	width: 100%;
	background: green;
	border: 1px solid #000;
	border-radius: 3px;
`;

const Pixel = styled.div`
	width: 50px;
	height: 50px;
	color: #fff;
	background: green;
	border: 1px solid #000;
	border-radius: 3px;
`;

export default function Home() {
	const [text, setText] = useState();

	// 3.1. L - หันซ้าย
	// 3.2. R - หันขวา
	// 3.3. W – เดินไปด้านหน้าตามทิศทางที่หัน (เมื่อโปรแกรมเริ่มต้นจะหันไปทางด้านบนเสมอ)

	function shuffle(array) {
		let x = 0;
		let y = 0;
		console.log("in array", array);
		for (const element of array) {
			console.log(element);
			if (element === "r" || element === "R") {
				console.log("in R");
			} else if (element === "w" || element === "W") {
				console.log("in W");
			} else if (element === "l" || element === "L") {
				console.log("in L");
			}
		}

		// for (i; i > 0; i--) {
		// 	console.log(">>>", array[i], i);
		// 	// if(array[i] )
		// 	// const j = Math.floor(Math.random() * (i + 1));
		// 	// if()
		// 	// [array[i], array[j]] = [array[j], array[i]];
		// }
	}

	function generateTable(dataTable, containerId, classes) {
		shuffle(dataTable);
		let container = document.getElementById(containerId);
		let table = document.createElement("table");

		// Add classes to table
		for (const clazz of classes) {
			table.classList.add(clazz);
		}

		// Calculate cant of rows and columns
		let cantDataRow = 0;
		let cantDataCol = 0;
		do {
			cantDataRow++;
			cantDataCol = Math.ceil(dataTable.length / cantDataRow);
		} while (dataTable.length / Math.pow(cantDataRow, 2) > 1);

		let aux = 0;
		for (let i = 0; i < cantDataRow; i++) {
			// rows
			let row = document.createElement("tr");
			for (let j = 0; j < cantDataCol; j++) {
				// columns
				let col = document.createElement("td");
				col.textContent = dataTable[aux++];
				row.appendChild(col); // Add column to row
			}
			table.appendChild(row); // Add row to table
		}
		container.appendChild(table); // Add table to container
	}

	const onSummary = () => {
		const walk = text.split("");
		generateTable(walk, "container", ["class1", "class2", "class3", "etc"]);
	};

	return (
		<div style={{ padding: 20 }}>
			<div>คำสั่ง Robot Walk</div>
			<Input value={text} onChange={(e) => setText(e.target.value)} />
			<Button onClick={() => onSummary()}>คำนวน</Button>
			<div>
				<div id="container" />
			</div>
		</div>
	);
}
