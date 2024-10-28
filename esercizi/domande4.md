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

# Domande di comprensione - Settimana 4



## Domanda

Sia $A = \left|\matrix{1 & 2 \\ 2 & 1}\right|$.  Quale delle due seguenti matrici è l'inversa di $A$?
$$
B = \left|\matrix{1 & 1/2 \\ 1/2 & 1}\right|
,
\quad
C = \left|\matrix{-1/3 & 2/3 \\ 2/3 & -1/3}\right|
$$

::: details
$\boxed{C}$; cioè,
$$
AC = \vmatrix{1 & 0 \\ 0 & 1}
$$
::: 

## Domanda

Siano 
$$
A = \vmatrix{
-4 & 3 & 5
\\
6 & -2 & 1
}
, \quad
B = \vmatrix{
5 & 6 
\\
3 & -1
}
;
$$
quali delle seguenti operazioni sono ben definite (cioè, sensate)?

$$
AB, \ BA, \ B + A
$$

::: details
Solo $\boxed{BA}$.
:::

## Domanda

Quale di queste due ragionamenti è corretto?

a. Se $\vec u, \vec v, \vec w$ sono linearmente dipendenti, allora $\vec u$ è una combinazione lineare di $\vec v, \vec w$
b. Se $\vec u$ è una combinazione lineare di $\vec v, \vec w$, allora $\vec u, \vec v, \vec w$ sono linearmente dipendenti

::: details
$\boxed b$; per confermare che a. non è corretto, consideri $\vec u = \vmatrix{ 1 \\ 0}$, $\vec v = \vmatrix{0 \\ 1} = \vec w$.
:::

