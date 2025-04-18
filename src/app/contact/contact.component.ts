import {Component} from '@angular/core';

@Component({
    selector: 'app-contact',
    standalone: false,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {

    copiedDiscord = false
    copiedMail = false

    async copyToClipboard(value: string) {
        try {
            // @ts-ignore
            await navigator.clipboard.writeText(value)
            if(value === 'arthvro') this.copiedDiscord = true
            if(value === 'artbryja@gmail.com') this.copiedMail = true

            setTimeout(() => {
                this.copiedMail = false
                this.copiedDiscord = false
            }, 2000);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    }
}
