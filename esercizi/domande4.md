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

Altre domande in corso di preparazione, tornate fra qualche giorno!


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


<!--
## Domanda

If (sum), what does that tell you about liner (in)dependence?

## Domanda

Is this an eigenvector, if so what is the eigenvalue?
-->
