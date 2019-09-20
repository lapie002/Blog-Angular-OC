import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postsList = [
    {
      title: "Mon premier post",
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
      loveIts: 3,
      created_at: 'Thu Mar 15 2018 16:53:33 GMT+0100 (Paris, Madrid)'
    },
    {
      title: "Mon deuxième post",
      content: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).",
      loveIts: -2,
      created_at: 'Thu Mar 14 2018 12:54:33 GMT+0100 (Paris, Madrid)'
    },
    {
      title: "Encore un post",
      content: "L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du 'De Finibus Bonorum et Malorum' de Cicéron sont aussi reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).",
      loveIts: 0,
      created_at: 'Thu Mar 13 2018 18:57:33 GMT+0100 (Paris, Madrid)'
    }
  ];
}
