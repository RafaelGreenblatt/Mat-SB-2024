<!--@include: ../notation.md-->

<style scoped>
h1 {
    counter-reset: h2
}
h2:after {
    counter-increment: h2;
    content: "6." counter(h2) 
}

ol {list-style-type: lower-alpha;}
</style>

# Esercizi - Settimana 6


## Esercizio

Per la date matrici $A$, trovare gli autovalori di $A$, e per ogni autovalore trovare un autovettore:

a. $A = \vmatrix{2 & 3 \\ 4 & -2}$
b. $A = \vmatrix{-1 & 2 \\ -4 & 5}$
c. $A = \vmatrix{0 & 2 & 2 \\ -1 & 1 & 0 \\ 1 & 1 & 2}$

:::details
a. Il polinomio caratteristico di $A$ è 
$$
\det (A - \lambda I_2)
=
\det \vmatrix{2 - \lambda & 3 \\ 4 & -2- \lambda}
=
(2 - \lambda)(-2 - \lambda) - 12
=
\lambda^2 - 16
,
$$
che fa zero per $\lambda = \pm 4$.
<br>
Per $\lambda = 4$ dobbiamo trovare $\vec v$ tale che $A \vec v = 4 \vec v$, cioè risolvere il sistema
$$
\left \{ \begin{matrix}
 2x&+&3y  &=& 4x \\
 4x&- &2 y&  =& 4y
 \end{matrix} \right.
\quad \Leftrightarrow \quad 3 y = 2 x
$$
e fra le soluzioni c'è $x = 3, \ y =2$.
<br>
Procedendo in modo simile nel caso $\lambda = -4$ e riassumendo,
$$
\boxed{\begin{aligned}
\textup{autovalore } 4 \textup{ con autovettore } \vmatrix{3 \\ 2}, 
\\
\textup{autovalore } -4 \textup{ con autovettore } \vmatrix{1 \\ -2}.
\end{aligned}}
$$ 
Si noti che non è l'unica risposta possibile, per esempio anche $\vmatrix{-1 \\ 2}$ è un autovettore di $A$ con autovettore $-4$. <br>
b. Procedendo in modo simile,
$$ 
\boxed{\begin{aligned}
\textup{autovalore } 3 \textup{ con autovettore } \vmatrix{1 \\ 2}, 
\\
\textup{autovalore } 1 \textup{ con autovettore } \vmatrix{1 \\ 1}.
\end{aligned}}
$$
c. Il polinomio caratteristico di $A$ è
$$\det (A - \lambda I_3)
=
-\lambda^3 + 3 \lambda^2 - 2 \lambda
$$
che fa zero per $\lambda = 2,1,0$; poi procedendo come prima,
$$ 
\boxed{\begin{aligned}
\textup{autovalore } 2 \textup{ con autovettore } \vmatrix{1 \\ -1 \\ 2}, 
\\
\textup{autovalore } 1 \textup{ con autovettore } \vmatrix{0 \\ -1 \\ 1},
\\
\textup{autovalore } 0 \textup{ con autovettore } \vmatrix{-1 \\ -1 \\ 1}.
\end{aligned}}
$$
:::


## Esercizio

Si calcolcio i seguenti limiti:

a. $\lim_{x \to \infty} \frac{3-x^2}{x+2}$
b. $\lim_{x \to \infty} \left[ \frac{x^4-2x+1}{(x-1)^2} - x^2 \right]$
c. $\lim_{x \to \infty} \left[ \frac{(x+7)^2}{2x} - x \right]$

::: details
a. 
$$
\lim_{x \to \infty}  \frac{3-x^2}{x+2}
=
\lim_{x \to \infty} 
\frac{\frac3x - x}{1 + \frac2x}
=
\lim_{x \to \infty} 
x
=
\boxed{\infty}$$
b.
$$
\lim_{x \to \infty}  
\left[ \frac{x^4-2x+1}{(x-1)^2} - x^2 \right]
=
\lim_{x \to \infty}  
\left[ \frac{x^4-2x+1}{x^2-2x+1} - x^2 \right]
=
\lim_{x \to \infty} 
\left[ x^2 - x^2 \right]
=
\boxed{0}$$
c.
$$
\lim_{x \to \infty}  
\left[ \frac{(x+7)^2}{2x} - x \right]
=
\lim_{x \to \infty}  
\left[ \frac{x^2+14x+49}{2x} - x \right]
=
\lim_{x \to \infty} 
\left[ \frac{x}2-x \right]
=
\boxed{-\infty}$$
:::


## Esercizio

Si trovi $t > 0$ tale che la funzione
$$
f(x) = \begin{cases}
(x+t)^2 
, & x \le 2
\\
4 x^2 e^{x-2}
, & x > 2
\end{cases}
$$
è continua.

::: details
$f$ è comunque continua dappertutto tranne $x=2$, dove ci vorrebbe
$$
(2+t)^2 = 4 \cdot 2^2 e^{0}
\Leftrightarrow
t^2 + 4 t + 4 = 16
\Leftrightarrow
t^2 + 4 t - 12 =0
,
$$
che si può risolvere con la formula quadratica,
$$
t = \frac{-4 \pm \sqrt{16 +48 }}{2} = -2 \pm 4,
$$
e scegliendo la radice positive abbiamo $\boxed{t = 2}$.
:::
