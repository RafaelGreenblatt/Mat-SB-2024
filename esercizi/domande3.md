<!--@include: ../notation.md-->

# Domande di comprensione - Settimana 1

## Domanda

Dica se i seguenti affermazioni sono vere o false:

1. $\{1,2,3\}=\{2,1,3\}$
2. $\{n \in \bN | n < 3 \} = \{0,1,2\}$
3. $\{n \in \bN | n \le \tfrac52\}=\{0,1,2\}$
4. $\{n \in \bZ| n < 3\} = \{0,1,2\}$

:::details
1. Vero
2. Vero
3. Vero
4. Falso
:::

## Domanda

Per quale operazione ($\cup,\cap$, o $\setminus$), messo al posto del "?", è vero la seguente:

$$
\{1,2,3\} \ ? \ \{0,1\} = \{1\}
$$

::: details
$\cap$; per quanto riguarda le altre,

$$
\{1,2,3\} \cup  \{0,1\} = \{0,1,2,3\};
\quad
\{1,2,3\} \setminus \{0,1\} = \{2,3\};
$$

:::

## Domanda

Sia $a \le b$, $c > b$.  Quali delle delle affermazioni seguenti sono vere?

1. $a \le c$
1. $a < c$
1. $a=c$
1. Nessuno delle affermazioni sopra

:::details
Riscrivendo,
$$a \le b < c \to a < c,$$
ma se questo è vero, è anche vero che $a \le c$.  Quindo, sono vere $\boxed{\text{1 e 2}}$.
:::

## Domanda

Quali delle secondi sono vere?

1. $\forall n \in \bN, \ n \ge 0$
2. $\forall n \in \bZ, \ n \ge 0$
3. $\exists n \in \bN: \ n \ge 0$
4. $\exists n \in \bZ : \ n \ge 0$

::: details
1. Vero
2. Falso
3. Vero
4. Vero
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
