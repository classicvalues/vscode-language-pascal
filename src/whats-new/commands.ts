/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { commands } from "vscode";
import { Container } from "../../vscode-language-pascal-providers/src/container";
import { WhatsNewManager } from "../../vscode-whats-new/src/Manager";
import { WhatsNewPascalContentProvider } from "./contentProvider";

export function registerWhatsNew() {
    let provider = new WhatsNewPascalContentProvider();
    let viewer = new WhatsNewManager(Container.context).registerContentProvider("pascal", provider);
    viewer.showPageInActivation();
    Container.context.subscriptions.push(commands.registerCommand('pascal.whatsNew', () => viewer.showPage()));
}