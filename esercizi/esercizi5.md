<!--@include: ../notation.md-->

<style scoped>
h1 {
    counter-reset: h2
}
h2:after {
    counter-increment: h2;
    content: "5." counter(h2) 
}

ol {list-style-type: lower-alpha;}
</style>

# Esercizi - Settimana 5

## Esercizio

Per la date matrici $A$, trovare gli autovalori di $A$, e per ogni autovalore trovare un autovettore:

a. $A = \vmatrix{2 & 3 \\ 4 & -2}$


:::details
a. Il polinomo caratteristico di $A$ è 
$$
\det (A - \lambda I_2)
=
\det \vmatrix{2 - \lambda & 3 \\ 4 & -2- \lambda}
$$
:::
