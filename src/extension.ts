import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let understandDisposable = vscode.commands.registerCommand('git-aid/understand', () => {
        vscode.env.openExternal(vscode.Uri.parse('https://www.tinkerhub.org/courses/launching-git-and-github/learn/2.1'));
    });

    let introDisposable = vscode.commands.registerCommand('git-aid/intro', () => {
        vscode.env.openExternal(vscode.Uri.parse('https://www.tinkerhub.org/courses/launching-git-and-github/learn/2.2'));
    });

    let repoDisposable = vscode.commands.registerCommand('git-aid/repo', () => {
        vscode.env.openExternal(vscode.Uri.parse('https://www.tinkerhub.org/courses/launching-git-and-github/learn/4.1'));
    });

    let desktopDisposable = vscode.commands.registerCommand('git-aid/desktop', () => {
        vscode.env.openExternal(vscode.Uri.parse('https://www.tinkerhub.org/courses/launching-git-and-github/learn/4.2'));
    });

    let pushDisposable = vscode.commands.registerCommand('git-aid/push', () => {
        vscode.env.openExternal(vscode.Uri.parse('https://www.tinkerhub.org/courses/launching-git-and-github/learn/4.3'));
    });

    let pullDisposable = vscode.commands.registerCommand('git-aid/pull', () => {
        vscode.env.openExternal(vscode.Uri.parse('https://www.tinkerhub.org/courses/launching-git-and-github/learn/4.3'));
    });

    let issuesDisposable = vscode.commands.registerCommand('git-aid/issues', () => {
        vscode.env.openExternal(vscode.Uri.parse('https://www.tinkerhub.org/courses/launching-git-and-github/learn/4.3'));
    });

    let codespacesDisposable = vscode.commands.registerCommand('git-aid/codespaces', () => {
        vscode.env.openExternal(vscode.Uri.parse('https://www.tinkerhub.org/courses/launching-git-and-github/learn/4.4'));
    });

    context.subscriptions.push(understandDisposable, introDisposable, repoDisposable, desktopDisposable, pushDisposable, pullDisposable, issuesDisposable, codespacesDisposable);
}

export function deactivate() {}
