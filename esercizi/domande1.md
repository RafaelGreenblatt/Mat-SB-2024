<!--@include: ../notation.md-->

# Domande di comprensione - Settimana 1

## Domanda

Scrivere esplicitamente le seguenti insieme; ad esempio,


$$ \{ n \in \bN | 2 \le n < 7 \} = \boxed{\{2,3,4,5,6\}}\ . $$

1. $\{ n \in \bZ | \sqrt3 \le n \le 5 \}$
2. $\{ n \in \bZ | -2 < n \le 3\}$
3. $\{ n \in \bN | -2 < n \le 3\}$


::: details 
1. $\{2,3,4,5\}$
2. $\{-1,0,1,2,3\}$
3. $\{0,1,2,3\}$
:::

## Domanda

Sia $a \le b$, $c > b$.  Quali delle delle affermazioni seguenti sono vere?

1. $a \le c$
1. $a < c$
1. $a=c$
1. Nessuno delle affermazioni sopra

:::details Soluzione
Riscrivendo,
$$a \le b < c \to a < c,$$
ma se questo è vero, è anche vero che $a \le c$.  Quindo, sono vere $\boxed{\text{1 e 2}}$.
:::

## Domanda

Scrivere il risultato delle seguenti sia come un singolo intervallo, sia come un insieme caratterizzato per una proposizione.

Esempio: 
$$
[2,5] \cup [3,6)
= 
[2,7)
=
\{ x \in \bR | 2 \le x < 7 \}
$$

1. $(2,5] \cap (3,7]$
2. $(2,5] \cup (3,7]$
3. $(2,5] \setminus (3,7]$

::: details
1. $(2,5] \cap (3,7] = \boxed{(3,5]} = \boxed{\{ x \in \bR | 3 < x \le 5\}}$
2. $(2,5] \cup (3,7] = \boxed{(2,7]} = \boxed{\{ x \in \bR | 2 < x \le 7\}}$
3. $(2,5] \setminus (3,7] = \boxed{(2,3]} = \boxed{\{ x \in \bR | 2 < x \le 3\}}$
:::

<style scoped>
h1 {
    counter-reset: h2
}
h2:after {
    counter-increment: h2;
    content: "1." counter(h2) 
}
</style>
