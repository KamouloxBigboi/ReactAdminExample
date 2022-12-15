import { Card, CardContent, CardHeader } from "@mui/material";

export const Dashboard = () => (
  <Card>
    <CardHeader title="Vous êtes sur la page d'administration    de Sante Connect" />
    <CardContent> Ici les données des utilisateurs, des articles ainsi que leurs intitulés sont modifiables par un administrateur authorisé seulement </CardContent>
  </Card>
);
