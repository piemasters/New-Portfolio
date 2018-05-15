import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  private projects = [
    {
      id: 1,
      title: 'IBM OMNIbus',
      img: 'assets/images/ftep/Capture.JPG',
      body: 'online',
    },
    {
      id: 2,
      title: 'Smartlock',
      img: 'assets/images/ftep/Capture.JPG',
      body: 'online'
    },
    {
      id: 3,
      title: 'Passport Smartforms',
      img: 'assets/images/ftep/Capture.JPG',
      body: 'offline'
    },
    {
      id: 4,
      title: 'Dashboard',
      img: 'assets/images/ftep/Capture.JPG',
      body: 'online'
    },
    {
      id: 5,
      title: 'Forestry TEP',
      img: 'assets/images/ftep/Capture.JPG',
      body: 'online'
    },
    {
      id: 6,
      title: 'Electron',
      img: 'assets/images/ftep/Capture.JPG',
      body: 'offline'
    },

  ];

  getProjects() {
    return this.projects;
  }

  getProject(id: number) {
    return this.projects.find(
      (p) => {
        return p.id === id;
      }
    );
  }
}
