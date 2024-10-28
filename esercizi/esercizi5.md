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
 \end{matrix} \right .$
b. $\left \{ \begin{matrix}
 6 x &+& 3 y &=& t + 6
 \\
 (t-1)^2 x &+& 2 y &=& 6
 \end{matrix} \right .$

::: details

a. Soluzione unica per $t \in \bR \setminus \{-1,3\}$, nessuna soluzione per $t=-1$, infinite soluzioni per $t=3$.
	\\
	Per $t=3$, soluzioni $(x,y) = (2-2s,s)$ per ogni $s \in \bR$.
b. Soluzione unica per $t \in \bR \setminus \{-1,3\}$, nessuna soluzione per $t=-1$, infinite soluzioni per $t=3$.
	\\
	Per $t=3$, soluzioni $(x,y) = (s,3 - 2s)$ per ogni $s \in \bR$.
:::

## Esercizio

Per la date matrici $A$, trovare gli autovalori di $A$, e per ogni autovalore trovare un autovettore:

a. $A = \vmatrix{2 & 3 \\ 4 & -2}$
b. $A = \vmatrix{-1 & 2 \\ -4 & 5}$
c. $A = \vmatrix{0 & 2 & 2 \\ -1 & 1 & 0 \\ 1 & 1 & 2}$

:::details
a. Il polinomo caratteristico di $A$ è 
$$
\det (A - \lambda I_2)
=
\det \vmatrix{2 - \lambda & 3 \\ 4 & -2- \lambda}
b. $3, \vmatrix{1 \\ 2}$; $1, \vmatrix{1 \\ 1}$
$$
c. $\lambda = 2,1,0$

Nonuniqueness
:::
