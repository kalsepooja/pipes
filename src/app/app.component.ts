import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto quo eligendi, excepturi id quibusdam unde eius eum ab at vel explicabo consectetur nam suscipit neque officia, quasi sed ducimus assumenda voluptatum magnam! Qui ipsa tenetur, eveniet soluta sequi ab reprehenderit nisi corrupti totam magnam! Dicta commodi natus itaque voluptatum rerum sequi vel fugiat aspernatur nulla eos. Totam repellat eaque autem facere unde tempore rem enim possimus. Sed omnis eaque rerum nostrum est soluta tenetur cumque saepe tempora. Aut tempore id deserunt repellat, minima porro ut nobis quisquam dignissimos excepturi quia aspernatur, illum natus? Neque dolorum veritatis repellat. Vel, provident!  ';

  cource = {
    Name: "MEAN Stack",
    student: 123004,
    rating: 4.23555,
    price: 199.99,
    releaseDate: new Date(2024, 1, 26)
  }

  fileSize = [
    {
      fileName: 'HTML',
      type: 'pdf',
      size: 13564484,
      img: ''
    },
    {
      fileName: 'javascript',
      type: 'pdf',
      size: 13564484,
      img: ''
    },
    {
      fileName: 'angular',
      type: 'pdf',
      size: 13564484,
      img: ''
    },
    {
      fileName: 'sql',
      type: 'pdf',
      size: 13564484,
      img: ''
    }
  ]

}

