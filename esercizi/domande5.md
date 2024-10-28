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

# Domande di comprensione - Settimana 5



## Domanda

Se $A$ è una matrice $3 \times 5$, quale di questi affermazioni è necessariamente vero?

a. Il rango di $A$ è compreso fra 0 e 3
b. Il rango di $A$ è compreso fra 3 e 5
c. Il rango di $A$ è 15
d. Il rango di $A$ è 5

::: details
$\boxed{a}$; l'unico fatto rilevante è che il rango di una matrice non può superare nè il suo numero di righe nè il suo numero di colonne.
:::

## Domanda

Quale fra $\vec u = \vmatrix{1 \\ 1}$, $\vec v = \vmatrix{1 \\ -1}$ è un autovettore di $A= \vmatrix{2 & -1 \\ 1 & 4}$?

::: details
$$ 
A \vec u 
=
\vmatrix{2 - 1 \\ 1 + 4}
=
\vmatrix{1 \\ 5},
$$
che non è colineare con $\vec u$, mentre
$$
A \vec v 
=
\vmatrix{2 + 1 \\ 1 -4}
=
\vmatrix{3 \\ -3}
=
- 3 \vec v
,
$$
quindi $\boxed{\vec v}$.

:::


<!--
## Domanda

Is this an eigenvector, if so what is the eigenvalue?
-->
