// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('helloworld.createBoilerplate', () => {
		
		const htmlContent = `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset='UTF-8' />
			<meta name="viewport" content="width=device-width", initial-scale=1.0"/>
			<meta http-equiv="X-UA-Compatible content="ie=edge" />
			<title>Page Name</title>
			<link rel="stylesheet" href="index.css" />
		</head>
		<body>
			<script src="app.js"></script>
		</body>
		</html>
		`; 

		// const folderPath = vscode.workspace.workspaceFolders[0].uri.toString().split(":")[1];
		
		/*
		console.error(folderPath)
		fs.writeFile(path.join(folderPath, "index.html"), htmlContent, { flag: 'w' }, err => {
			if(err){ 
				console.error(err);
				vscode.window.showErrorMessage("Failed to create boilerplate HTML file");
			} else {
				vscode.window.showInformationMessage("Created Boilerplate");
			}
		});
		*/

		if(vscode.workspace.rootPath != null) {
			const folderPath = vscode.workspace.rootPath.toString();
			console.log(path.join(folderPath, "index.html").toString());
			fs.writeFile(path.join(folderPath, "index.html"), htmlContent, { flag: 'w' }, err => {
				if(err){ 
					console.error(err);
					vscode.window.showErrorMessage("Failed to create boilerplate HTML file");
				} else {
					vscode.window.showInformationMessage("Created Boilerplate");
				}
			});
		}

	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
