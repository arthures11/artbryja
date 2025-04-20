import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-contact',
    standalone: false,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

    copiedDiscord = false
    copiedMail = false

    ngOnInit() {

        this.copiedDiscord = false
        this.copiedMail = false
    }

    async copyToClipboardDiscord(value: string) {
        try {
            // @ts-ignore
            await navigator.clipboard.writeText(value)
            if(value === 'arthvro') this.copiedDiscord = true

            setTimeout(() => {
                this.copiedDiscord = false
            }, 2000);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    }
    async copyToClipboardMail(value: string) {
        try {
            // @ts-ignore
            await navigator.clipboard.writeText(value)
            if(value === 'artbryja@gmail.com') this.copiedMail = true

            setTimeout(() => {
                this.copiedMail = false
            }, 2000);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    }
}
