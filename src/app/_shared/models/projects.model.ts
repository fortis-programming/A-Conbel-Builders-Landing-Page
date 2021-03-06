export interface ProjectsModel {
   id: string;
   title: string;
   description: string;
   image: string;
   imageGallery: Array<string>;
   location: string;
   projectDuration: string;
   serviceProvided: Array<string>;
}