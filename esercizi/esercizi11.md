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


## Esercizio

Si consideri l'equazione differenziale
$$
y''-y'-2y = 4
.
$$

a. Si trovi una soluzione particolare dell'equazione. (Consiglio: l'equazione ammette una soluzione di equilibrio, cioè una soluzione costante).
b. Si trovino due soluzioni independenti della relativa equazione omogenea. (Consiglio: provare la forma $y(t) = \exp(kt)$, e, se non basta, $y(t) = t \exp(k t)$ con lo stesso valore di $k$.)
c. Usando i risultati di sopra, si scrivi la soluzione generale.
d. Finalmente, si trovi la soluzione del problema di Cauchy
$$
\begin{cases}
y''-y'-2y = 4
\ , \\
y(0)=1
\ , \\
y'(0) = 3
\ .
\end{cases}
$$


::: details
a. Mettendo $y(t) = K$, otteniamo
$-2 K = 4$, quindi $K = -2$, autenticamente costante, quindi $\boxed{y(t) = -2}$ è una soluzione.
b. La versione omogenea dell'equazione è  
$$
y'' - y' - 2y = 0. $$
Provando la prima forma consigliata, otteniamo
$$
k^2 e^{kt} - k e^{kt} - 2 e^{kt} = 0,
$$
quindi
$$
k^2 - k - 2 = 0
$$
che ha soluzioni $k = -2, 1$.
Quindi, abbiamo le soluzioni omogenee
$$
\boxed{
y(t) = e^{2 t}
, \quad
y(t) = e^{-t}
}.
$$
c. $\boxed{y(t) = -2 + C_1 e^{-2t} + C_2 e^t }$
d. Con la forma di sopra $y(0) = -2 + C_1 + C_2$ e $y'(0) = -2 C_1 + C_2$; sosituendo nelle condizioni inziale date,
$$
\begin{cases}
-2 + C_1 + C_2 & = 1
\ ,
\\
-2 C_1 + C_2 = 3
\end{cases}
\Rightarrow
\begin{cases}
C_1 = 2 \ ,
\\
C_2 = 1
\end{cases}
$$
e quindi $\boxed{y(t) = -2 + 2 e^{2t} + e^{-t}}$.
:::

## Esercizio

Con lo stesso procedimento dell'esercizio precedente, si risolvi il problema di Cauchy
$$
\begin{cases}
y'' + 4 y' + 4 y = 8 
\ , \\
y(0) = 3
\ , \\
y'(0) = 0
\ .
\end{cases}
$$

::: details

La soluzione di equilibrio (una soluzione particolare) è $y(t) = 2$; per l'equazione omogenea $y'' + 4 y' + 4 y$ otteniamo prima
$$
k^2 e^{kt} + 4 k e^{kt} + 4 e^{kt} = 0
\Rightarrow
k^2 + 4k+4 = 0
\Rightarrow 
k = -2
;
$$
quindi in questo modo abbiamo una sola soluzione $y(t) = e^{-2t}$.  Allora proviamo $y(t) = t e^{-2t}$: con questa forma
$$
y''(t) + 4 y'(t) + 4 y(t)
=
4 t e^{-2t} -4 e^{-2t}
+
4(-2 t e^{-2 t} + e^{-2t}
+ 4 t e^{-2t}
=0 
,
$$
e quindi questa è una seconda soluzione, e abbiamo la soluzione generale
$$
y(t) = 2 + C_1 e^{-2t} + C_2 t e^{-2 t}
.
$$

Finalmente, applicando le condizioni iniziali otteniamo
$$
\begin{cases}
2 + C_1 = 3 
\ , \\
-2 C_1 + C_2 = 0
\end{cases}
\Rightarrow
\begin{cases}
C_1 = 1
\ , \\
C_2 = 2
\end{cases}
$$
e quindi, finalmente,
$$
\boxed{
y(t) = 2 + e^{-2t} + 2 t e^{-2t}
}.
$$
:::
