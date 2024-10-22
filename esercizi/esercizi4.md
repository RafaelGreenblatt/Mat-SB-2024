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

::: details
a.
b.
c.
:::


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

:::details
a. unique solution
b. many solutions
c. no solution
:::

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

::: details
a. $\det \vmatrix{1 & 3 \\ 5 & -2} = 1 \cdot(-2) - 3 \cdot 5 = -2 - 15 = \boxed{-17}$
b. $\det\vmatrix{1 & -2 \\ -2 & 4} = 4 - (-2)(-2) = 4 -4 = \boxed{0}$
c. $\det\vmatrix{-3 & 1 & 0 \\ 0 & 1 & 2 \\ 4 & 1 & -1}
	= (-3) \cdot 1 \cdot (-1) + 1 \cdot 2 \cdot 4 + 0 - (-3) \cdot 2 \cdot 1 - 0 - 0
	= 3 + 8 + 6 = \boxed{17}$
:::

## Esercizio

Per ognuno di questi tripli di vettori, si scriva $\vec u$ come combinazione lineare di $\vec v$ e $\vec w$ (o dire che è impossibile).

a. $\vec u = \vmatrix{2 \\ -2} , \ \vec v = \vmatrix{1 \\ 4}, \ \vec w = \vmatrix{3 \\ 2}$
b. $\vec u = \vmatrix{0 \\ 2 \\ 1} , \ \vec v = \vmatrix{1 \\ 2 \\ 3}, \ \vec w = \vmatrix{1 \\ -1 \\ 1}$
c. $\vec u = \vmatrix{-2 \\ 3 \\ 1} , \ \vec v = \vmatrix{2 \\ 1 \\ 3}, \ \vec w = \vmatrix{-2 \\ 1 \\ -1}$


::: details
a. In altre parole, vogliamo trovare $\mu,\lambda$ tali che $\vec u = \mu \vec v + \lambda \vec w$.  Questo è la stessa cosa di risolvere il sistema
$$
\left\{\array{
\mu &+& 3 \lambda &=& 2
\\
4 \mu &+& 2 \lambda &=& - 2.
}\right.
$$
Risolvendo la prima equazione per $\mu$ e sostituendo il risultato nel secondo, questo diventa
$$
\left\{\array{
\mu &=& 2 - 3 \lambda
\\
8 - 10 \lambda &=& -2
}\right.
$$
e poi risolvendo la seconda per $\lambda$ e sostituendo dà $\mu = -1, \lambda = 1$.
Quindi,
$$
\boxed{\vec u = - \vec v + \vec w}.
$$
:::
