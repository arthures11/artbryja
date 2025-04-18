import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-photos',
  standalone: false,

  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent implements OnInit{


  rotations: string[] = [];


  ngOnInit() {
    // Precompute rotations for each photo (alternating left/right tilt)
    this.rotations = this.photos.map((_, index) =>
        index % 2 === 0 ? 'rotate(-3deg)' : 'rotate(3deg)'
    );
  }


  photos = [
    { url: 'assets/images/photo-3.jpg', description: '' },
    { url: 'assets/images/photo-1.JPG', description: 'During the polonaise dance.' },
    { url: 'assets/images/photo-2.jpg', description: 'With my sister at her party.' },
  ];

  selectedPhoto: { url: string; description: string } | null = null;

  openPhoto(photo: { url: string; description: string }) {
    this.selectedPhoto = photo;
    const modal = document.getElementById('photoModal') as HTMLDialogElement;
    modal.showModal();
  }

  closeModal() {
    const modal = document.getElementById('photoModal') as HTMLDialogElement;
    modal.close();
    this.selectedPhoto = null;
  }

  getRandomTilt(): number {
    return Math.random() * 10 - 5; // Generates a number between -5 and 5
  }
}
