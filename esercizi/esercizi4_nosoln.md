<!--@include: ../notation.md-->

<style scoped>
h1 {
    counter-reset: h2
}
h2:after {
    counter-increment: h2;
    content: "4." counter(h2) 
}

ol {list-style-type: lower-alpha;}
</style>

# Esercizi - Settimana 4

## Esercizio

Si consideri l'equazione $A \vec v = \vec b$, con
$$
A = 
\vmatrix{
3 & 1 & 2
\\
3 & 0 & -2
\\
0 & 3 & 1
}
, \quad
\vec v = \vmatrix{x \\ y \\ z}
, \quad
\vec b = \vmatrix{3 \\ 1 \\ 0}
;
$$

a. Si scriva un sistema equivalente di equazioni lineari nei incogniti $x,y,z$
b. Si verifichi che
$A^{-1} = \frac{1}{33} 
\vmatrix{
6 & 5 & -2 
\\
-3 & 3 & 12
\\
9 & -9 & -3
}$
c. Usare questo per trovare una soluzione del sistema ottenuto in parte a.




## Esercizio

Si risolvino le seguenti sistemi di equazioni lineari:

a. $\left\{\array{
x &+&y&+&z &=& 1
\\
3x &+&2y&+&z &=& -1
\\
x &+& y &-&z &=& 0
}\right.$
a. $\left\{\array{
x &+&y&+&z &=& 1
\\
3x &+&2y&+&z &=& -1
\\
x &&&-&z &=& -3
}\right.$
a. $\left\{\array{
x &+&y&+&z &=& 1
\\
3x &+&2y&+&z &=& -1
\\
x &&&-&z &=& 0
}\right.$



## Esercizio

Si trovi l'inversa della matrice $A=\vmatrix{1 & 2 \\ 3 & 4}$

::: tip

Riscrive

$$
\vmatrix{a & b \\ c & d}
\cdot 
\vmatrix{1 & 2 \\ 3 & 4}
=
\vmatrix{1 & 0 \\ 0 & 1}
$$
come un sistema di equazioni lineari, e risoverlo.
:::


## Esercizio

Si calcolino i determinanti delle matrici seguenti:

a. $\vmatrix{1 & 3 \\ 5 & -2}$
b. $\vmatrix{1 & -2 \\ -2 & 4}$
c. $\vmatrix{-3 & 1 & 0 \\ 0 & 1 & 2 \\ 4 & 1 & -1}$


