<!--@include: ../notation.md-->

<style scoped>
h1 {
    counter-reset: h2
}
h2:after {
    counter-increment: h2;
    content: "3." counter(h2) 
}

ol {list-style-type: lower-alpha;}
</style>

# Esercizi - Settimana 3

## Esercizio

Per ognuno delle seguenti, si trovi un vettore $\vec{v}$ con il magnitudine specificato nella stessa direzione del dato vettore $\vec u$.

a. $\| \vec v\| = 7$, $\vec u = \vmatrix{3 \\ 4}$
b. $\| \vec v \| = 3$, $\vec u = \vmatrix{-2 \\ 5}$
c. $\| \vec v \| = 7$, $\vec u = \vmatrix{3 \\ -2}$
d. $\| \vec v \| = 9$, $\vec u = \vmatrix{2 \\ -1 \\ 2}$


::: details
a. Essendo $\| \vec u \| = \sqrt{3^2 + 4^2} = \sqrt{25} = 5$, allora $\vec v = \frac75 \vec u = \boxed{\vmatrix{21/5 \\ 28/5}}$
b. $\| \vec u \| = \sqrt{(-2)^2 + 5^2} = \sqrt{29}$, quindi $\vec v = \frac3{\sqrt{29}} \vec u = \boxed{\vmatrix{-10/\sqrt{29} \\ 15/\sqrt{29}}}$
c. $\| \vec u \| = \sqrt{3^2 + (-2)^2} = \sqrt{13}$, quindi $\vec v = \frac7{\sqrt{13}} \vec u = \boxed{\vmatrix{-21/\sqrt{13} \\ -14/\sqrt{13}}}$
d. $\| \vec u \| = \sqrt{2^2 + (-1)^2 + 2^2} = \sqrt{9}=3$, quindi $\vec v = \frac93 \vec u = 3 \vec u = \boxed{\vmatrix{6 \\ -3 \\ 6}}$
:::

## Esercizio
Per le seguenti coppie di vettori $\vec u, \vec v$, si dice se sono perpendicolari.

a. $\vec u = \vmatrix{1 \\ 4 \\ -3}$, $\vec v = \vmatrix{-5 \\ 2 \\ 1}$
b. $\vec u = \vmatrix{1 \\ 4 \\ 2}$, $\vec v = \vmatrix{ -4 \\ 1 \\ 2}$
c. $\vec u = \vmatrix{4 \\ -1 \\ 5}$, $\vec v = \vmatrix{2 \\ 3 \\ -1}$

::: details
a. $\left\langle \vec u, \vec v \right\rangle = 1\cdot(-5) + 4 \cdot 2 + (-3) \cdot 1 = 0$, quindi $\boxed{\text{sì}}$
b. $\left\langle \vec u, \vec v \right\rangle = 1\cdot(-4) + 4 \cdot 1 + 2 \cdot 2 = 8 \neq 0$, quindi $\boxed{\text{no}}$
c. $\left\langle \vec u, \vec v \right\rangle = 4\cdot 2 + (-1) \cdot 3 + 5 \cdot (-1) = 0$, quindi $\boxed{\text{sì}}$
:::

## Esercizio

Per i seguenti $\vec u$, $\vec v$, si trovi un vettore perpendicolare sia a $\vec u$ sia a $\vec v$:

a. $\vec u = \vmatrix{1 \\ 4 \\ 0}$, $\vec v = \vmatrix{2 \\ 0 \\ 1}$
b. $\vec u = \vmatrix{1 \\ 3 \\ 2}$, $\vec v = \vmatrix{ -4 \\ 1 \\ 2}$
c. $\vec u = \vmatrix{4 \\ -1 \\ 5}$, $\vec v = \vmatrix{2 \\ 3 \\ -1}$

::: details
a. $\vec u \wedge \vec v = \vmatrix{4 \cdot 1 - 0 \cdot 0 \\ 0 \cdot 2 - 1 \cdot 1 \\ 1 \cdot 0 - 2 \cdot 4} = \boxed{\vmatrix{4 \\ -1 \\ -8}}$.
Per controllare, notiamo che 
$$\innerProd{\vmatrix{1 \\ 4 \\ 0}}{\vmatrix{4 \\ -1 \\ -8}} = 4-4=0,$$
$$\innerProd{\vmatrix{2 \\ 0 \\ 1}}{\vmatrix{4 \\ -1 \\ -8}} = 8-8=0.$$
b. $\vec u \wedge \vec v = \vmatrix{3 \cdot 2 - 2 \cdot 1 \\ 2 (-4) - 1 \cdot 2 \\ 1 \cdot 1 - 3(-4)} = \boxed{\vmatrix{4 \\ -10 \\ 13}}$.
c. $\vec u \wedge \vec v = \vmatrix{(-1)(-1) - 5 \cdot 3 \\ 5 \cdot 3 - (-1) 4 \\ 4 \cdot 3 - (-1) \cdot 2} = \boxed{\vmatrix{-14 \\ 14 \\ 14}}$.

Si noti che queste non sono le uniche soluzioni; ad esempio in (c) anche $\vmatrix{-1 \\ 1 \\ 1}$ andrebbe bene.
:::
