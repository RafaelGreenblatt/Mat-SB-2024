<!--@include: ../notation.md-->

<style scoped>
h1 {
    counter-reset: h2
}
h2:after {
    counter-increment: h2;
    content: "11." counter(h2) 
}

ol {list-style-type: lower-alpha;}
</style>

# Esercizi - Settimana 11

## Esercizio

Si dice quali delle tre formule
$$
A. \ y=\pi e^{-\cos x}
\quad
B. \ y= e^{x^2/2}
\quad
C. \ y= \frac1{1-x}
$$
è la soluzione di quale delle seguenti equazioni differenziali:
$$
\textup{I}.\ 
y'= y^2 
\quad 
\textup{II}.\ 
y' = y  \sin x
\quad
\textup{III}.\ 
y' = xy
$$



## Esercizio

a. Si trovi la soluzione *generale* dell'equazione differenziale
$$
x^3 z'=z.
$$
(Consiglio: la soluzione ha la forma $z(x) = C \exp(a x^b)$ per certi $a,b \in \bR$.)

b. Usando il risultato di parte a., si trovi la soluzione del problema di Cauchy
$$
\begin{cases}
z'=z/x^3,
\\
z(-1) = e.
\end{cases}
$$
c. Qual'è il dominio di definizione di questa soluzione particolare?


## Esercizio


Trovare la soluzione del problema di Cauchy
$$ 
\begin{cases}
\frac{dP}{dt} = \frac12 P(t) - 3 [P(t)]^2,
\\
P(0) = 1,
\end{cases}
$$
e valutare $\lim_{t \to \infty} P(t)$.

Consiglio: la soluzione ha la forma
$$
P(t)
=
\frac{a e^{bt}}{c+e^{bt}}
$$
per certi $a,b,c \in \bR$.





