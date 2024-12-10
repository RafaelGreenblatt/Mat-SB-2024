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

::: details
Per $A.$,
$$
\frac{dy}{dx}
=
\frac{d}{dx} [\pi e^{-\cos x}]
=
\pi \sin x e^{-\cos x}
=
y \sin x,
$$
cioe $\boxed{\textup{II}}$;
per $B.$,
$$
\frac{dy}{dx}
=
\frac{d}{dx} [ e^{x^2/2}]
=
x e^{x^2/2}
=
xy,
$$
cioe $\boxed{\textup{III}}$;
per $C.$,
$$
\frac{dy}{dx}
=
\frac{d}{dx} \frac1{1-x}
=
- \frac{-1}{(1-x)^2}
=
y^2,
$$
cioe $\boxed{\textup{I}}$;
:::

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

::: details
a. Se $z(x)$ ha la forma data, allora
$$ 
z'(x)
=
C a b x^{b-1} \exp(a x^b) = ab x^{b-1} z(x)
$$
ovvero
$$
x^{1-b} z'(x) = ab z(x)
$$
quindi per avere $x^3 z' = z$ occorre
$$
\begin{cases}
ab = 1,
\\
1-b = 3
\end{cases}
\Leftrightarrow
\begin{cases}
a=-\frac12
\\
b=-2,
\end{cases}
$$
cioè
$$
\boxed{z(x) = C \exp \left( \frac{-1}{2x^2} \right)}.
$$
b. Valutando l'ultima formula in $x=-1$, vogliamo
$$
e = C e^{-1/2}
\Leftrightarrow
C = e^{3/2}
,
$$
quindi
$$
\boxed{
z(x)
=
\exp\left(
\frac32 - \frac1{2x^2}
\right)
.
}
$$
c. Questa soluzione non è definito in $x=0$; essendo le condizioni iniziali dati con $x = -1$, il dominio è $\boxed{(-\infty,0)}$.
:::
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

::: details
Usando la forma consigliata,
$$
P'(t)
=
\frac{a b e^{bt} (c+e^{bt}) - ab e^{2 bt}}{(c+ e^{bt})^2}
=
\frac{a b e^{bt}}{c+e^{bt}} - \frac{ab e^{2 bt}}{(c+ e^{bt})^2}
=
b P(t) - \frac{b}{a} P^2(t)
$$
e $P(0) = a/(c+1)$, e inserendo nel problema posta occorre
$$
\begin{cases}
b = 1/2
, \\
b / a = 3
, \\
\frac{a}{c+1} = 1
\end{cases}
\Leftrightarrow
\begin{cases}
a = 1/6
, \\
b = 1/2
, \\
c = -5/6
\end{cases}
$$
ovvero
$$
P(t) = \boxed{ \frac{e^{t/2}}{6 e^{t/2}-5}};
$$
allora
$$
\lim_{t \to \infty} P(t) 
=
\boxed{1/6}
.
$$
:::



