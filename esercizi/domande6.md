<!--@include: ../notation.md-->
<style scoped>
h1 {
    counter-reset: h2
}
h2:after {
    counter-increment: h2;
    content: "6." counter(h2) 
}

ol {list-style-type: lower-alpha;}
</style>

# Domande di comprensione - Settimana 6



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
