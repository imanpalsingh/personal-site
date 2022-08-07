/*
    Register commands here
*/

import About from './commands/about/index.svelte';
import Contact from './commands/contact.svelte';
import Help from './commands/help.svelte';
import Work from './commands/work/index.svelte';

export const commands = [
	{ name: 'help', desc: 'show this help', component: Help },
	{ name: 'about', desc: 'Short description about me', component: About },
	{ name: 'work', desc: 'My recent projects and contributions', component: Work },
	{ name: 'contact', desc: 'How to get in touch?', component: Contact },
	{ name: 'clear', desc: 'Clear the terminal' },
	{ name: 'exit', desc: 'Exit this terminal' }
];

export const commandsIndex = commands.map((command) => command.name);
