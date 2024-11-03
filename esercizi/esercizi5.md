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

# Esercizi - Settimana 5

## Esercizio

Studiare in funzione del parametro $t$ l'esistenza di soluzioni dei seguenti sistemi 
(cioè, dire per quali valori di $t$ c'è un'unica soluzione, per quali nessuna soluzione, e così via), e calcolarle nei casi in cui sono infinite: 

a. $\left \{ \begin{matrix}
 x&+&2y  &=& 2 \\
 2x&+ &(t-1)^2 y&  =& t +1
 \end{matrix} \right.$
b. $\left \{ \begin{matrix}
 (t-2)^2 x &-& 2 y &=& 4
 \\
 2 x &-&  y &=& t-2
 \end{matrix} \right.$

::: details

a. La matrice di coefficienti è $A = \vmatrix{ 1 & 2 \\ 2 & (t-1)^2}$, per cui
$$
\det A = (t-1)^2 - 4 = t^2 - 2t -3,
$$
che fa zero per 
$$
t = \frac{2 \pm \sqrt{4+12}}{2}= \frac{2 \pm 4}2= 3,-1;
$$
per i altri valori ha rango 2, il massimo possibile (o in altre parole $A$ è invertibile), e quindi c'è un'$\boxed{\textup{unica soluzione per } t \neq 3,-1}$.  
<br> 
I altri casi sono più delicati.
Per $t = -1$ il sistema diventa
$$
\left \{ \begin{matrix}
 x&+&2y  &=& 2 \\
 2x&+ &4 y&  =& 0,
 \end{matrix} \right.
$$
che non ha soluzioni, che si vede perchè (per esempio) $\vmatrix{2 \\ 0}$ non è una combinazione lineare delle colonne $\vmatrix{1 \\ 2}, \ \vmatrix{2 \\ 4}$; $\boxed{\textup{per }t = -1 \textup{ nessuna soluzione}}$.
<br>
Invece per $t=3$
$$
\left \{ \begin{matrix}
 x&+&2y  &=& 2 \\
 2x&+ &4 y&  =& 4
 \end{matrix} \right.
\Leftrightarrow 
x + 2y =2
$$
e quindi $\boxed{\textup{per }t = 3 \textup{ infinite soluzioni}}$ date per
$$
\vmatrix{x \\ y} = \vmatrix{2 - 2 s \\ s}
, \ \forall s \in \bR
$$
b. Procedendo in modo simile,
$$
\boxed{\begin{aligned}
\textup{unica soluzione per } t \neq 0, 4
\\
\textup{nessuna soluzione per } t = 4
\\
\textup{per } t = 4, \textup{ infinite soluzioni},
\end{aligned}}
$$
e per $t=4$ le soluzioni sono
 $$\boxed{\vmatrix{x \\ y} = \vmatrix{s \\ 2 s -2} , \ \forall s \in \bR}.$$
:::

