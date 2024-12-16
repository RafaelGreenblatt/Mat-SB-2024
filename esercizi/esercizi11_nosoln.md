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




## Esercizio

Trovi la soluzione $x(t),y(t)$ al problema di Cauchy
$$
\begin{cases}
x' = -x + y 
\ , \\
y' = x-y
\ , \\
x(0) = 2
\ , \\
y(0) = 1
\end{cases}
$$

Consiglio: elimina una delle variabili; l'equazione di secondo grado che risulta ha due soluzioni della forma $e^{kt}$ con valori distinti di $k$.





## Esercizio

Trovi la soluzione $x(t),y(t)$ al problema di Cauchy
$$
\begin{cases}
x' = x-3y
\ , \\
y' = 2x - 4y
\ , \\
x(0) = 6
\ , \\
y(0) = 5
\end{cases}
$$

Consiglio: elimina una delle variabili; l'equazione di secondo grado che risulta ha due soluzioni della forma $e^{kt}$ con valori distinti di $k$.


Usando la prima equazione, abbiamo
$$
x' = x-3y \Rightarrow y = \frac{x-x'}3 \Rightarrow x' = \frac{x'-x''}3
\ ;
$$
sostituendo nell'altra equazione differenziale abbiamo
$$
y' = \frac{x'}3 - \frac{x''}3
=
2x - \frac43 x + \frac43 x'
=
\frac23 x + \frac43 x'
\Rightarrow x' - x'' = 2x + 4x'
\Rightarrow x''+3x'+2x = 0
$$
Poi provando $x(t) = e^{kt}$,
$$
k^2 e^{kt} + 3 k e^{kt} + 2 e^{kt} = 0
\Rightarrow
k^2 + 3 k + 2 = 0
\Rightarrow
k = -1,-2
\ ,
$$
quindi la soluzione generale $x(t) = C_1 e^{-t}+ C_2 e^{-2t}$.

Per le condizioni iniziali,
$$
\begin{cases}
y(0) = \frac{x(0)}3 - \frac{x'(0)}3 = 2 - \frac{x'(0)}3 = 5
\Rightarrow
x'(0)=-9
\end{cases}
$$
e quindi 
$$
\begin{cases}
x(t) = C_1 e^{-t}+ C_2 e^{-2t}
\ , \\
x(0) = 6
\ , \\
x'(0) = -9
\end{cases}
\Rightarrow
\begin{cases}
C_1 + C_2 = 6
\ , \\
-C_1 - 2 C_2 = -9
\end{cases}
\Rightarrow
\begin{cases}
C_1 = 3
\ , \\
C_2 = 3
\end{cases}
$$
cioè
$$
x(t) = \boxed{ 3 e^{-t} + 3 e^{-2t}}
;
$$
poi ricordando  $y = \frac13 x - \frac13 x'$, finalmente
$$
y(t) = \boxed{  3 e^{-t} + 2 e^{-2t}}.
$$
:::
