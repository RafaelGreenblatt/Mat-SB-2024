<!--@include: ../notation.md-->

<style scoped>
h1 {
    counter-reset: h2
}
h2:after {
    counter-increment: h2;
    content: "2." counter(h2) 
}

ol {list-style-type: lower-alpha;}
</style>

# Esercizi - Settimana 2

## Esercizio

Siano $f(x) = 2 x^2 +1$, $g(x) = 3x-5$.  Si trovino le seguenti:

a. $f(g(2))$
b. $f(g(x))$
c. $g(f(x))$
d. $(g \circ g)(x)$
e. $(f \circ f)(2)$

::: details
a. $g(2) = 6-5=1$, quindi $f(g(2))=f(1)=2+1=\boxed{3}$
b. $f(g(x)) = 2 (3x-5)^2 +1  = \boxed{18x^2-60x+51}$
c. $g(f(x))=3(2x^2+1)-5 = \boxed{6x^2 -2}$
d. $(g \circ g)(x) =3(3x-5)-5 = \boxed{9x-20}$
e. $f(2) = 2^2+1 = 5$, quindi $(f \circ f)(2) = f(f(2)) = f(5) = 2 \cdot 5^2 +1 = \boxed{51}$
:::

## Esercizio

Per le segenti coppie di funzione, si trovino $f \circ g$ e $g \circ f$.

a. $f(x) = x^2+1$, $g(x) = \sqrt{x+2}$
b. $f(x) = \sqrt{x}+2$, $g(x) = x^2 + 3$
c. $f(x) = |x|$, $g(x) = 5x+1$
d. $f(x) = \tfrac1{x-6}$, $g(x) = \tfrac7x + 6$
e. $f(x) = \tfrac1{x-4}$, $g(x) = \tfrac2x + 4$

::: details
a. $(f \circ g)(x) = (\sqrt{x+2})^2 + 1 = x+2+1 = \boxed{x+3}$, per $x \ge -2$; $(g \circ f)(x) = \boxed{\sqrt{x^2+1}+2}$
b. $(f \circ g)(x) = \boxed{\sqrt{x^2+3}+2}$, $(g \circ f)(x) = \boxed{(\sqrt{x}+2)^2+3}$
c. $(f \circ g)(x) = \boxed{|5x+1|}$, $(g \circ f)(x) = \boxed{5|x|+1}$
d. $(f \circ g)(x)= \frac1{\left(\tfrac7x +6 \right)-6} = \frac1{\tfrac7x} = \boxed{\frac{x}7}$, $x \neq 0$; $(g \circ f)(x) = \frac7{\tfrac1{x-6}}+6 = 7(x-6)+6 =\boxed{7x-36}$, $x \neq 6$
e. $(f \circ g)(x)= \frac2{\left(\tfrac2x +4 \right)-4} = \frac1{\tfrac2x} = \boxed{\frac{x}2}$, $x \neq 0$; $(g \circ f)(x) = \frac2{\tfrac1{x-4}}+4 = 2(x-4)+4 =\boxed{2x-4}$, $x \neq 4$
:::

## Esercizio

Con $f(x) = \tfrac1x$, $g(x) = x-3$, si trovino
a. $(f \circ g)(x)$
b. il dominio di $(f \circ g)$, scritto in termini di intervalli
c. $(g \circ f)(x)$
d. il dominio di $(g \circ f)$, scritto in termini di intervalli

::: details
a. $\boxed{\tfrac1{x-3}}$
b. $g(x)$ è sempre ben difinito; $(f \circ g)(x)$ sempre tranne per $g(x)=0$, cioè $x=3$; quindi $\boxed{(-\infty,3) \cup (3,\infty)}$
c. $\boxed{\tfrac1x - 3}$
d. $\boxed{(-\infty,0) \cup (0,\infty)}$
:::

## Esercizio

Per ognuno delle seguenti funzioni $h$, si trovino due funzioni $f,g$ tali che $h = f \circ g$:

a. $h(x) = \tfrac3{x-5}$
b. $h(x) = |x^2-7|$
c. $h(x) = \sqrt{2x+6}$
d. $h(x) = \tfrac1{(x-2)^3}$

:::details
a. $\boxed{f(x)=3/x, \ g(x) = x-5}$
b. $\boxed{f(x)=|x|, \ g(x) = x^2 - 7}$
c. $\boxed{f(x) = \sqrt{x}, \ g(x) = 2x + 6}$
d. $\boxed{f(x) = 1/x^3, \ g(x) = x-2}$

Queste non sono le uniche possibili risposte giuste; ad esempio per l'ultimo andrebbe bene anche $f(x) = 1/x$, $g(x) = (x-2)^3$.
:::


## Esercizio
Per le seguenti funzioni $f$, si trova $f^{-1}$:

a. $f(x) = x + 3$
b. $f(x) = 2 - x$
c. $f(x) = \tfrac{x}{x+2}$

:::details
a. $y = x+3 \Leftrightarrow x = y - 3$; $\boxed{f^{-1}(y) = y-3}$
b. $y = 2-x \Leftrightarrow x = 2 - y$; $\boxed{f^{-1}(y) = 2-y}$
c. Per $x \neq -2$, risolviamo $y=f(x)$ per $x$ così:
$$\begin{aligned}
y & = \frac{x}{x+2}
\\
(x+2)y & = x
\\
xy + 2y &= x
\\
xy - x &= -2y
\\
(y-1) x &= -2 y
\\
x &= \frac{-2y}{y-1} = \frac{2y}{1-y}
\end{aligned}$$
quindi, $\boxed{f^{-1}(y) = \tfrac{2y}{1-y}}$.
:::

## Esercizio
Per ognuno delle funzioni $f$ sotto, si trovino li intervalli più grandi in cui $f$ è invertibile, e trovare un inverso di $f$ su uno di questi intervalli:

a. $f(x) = (x+7)^2$
b. $f(x) = (x-6)^2$
c. $f(x) = x^2 -5$

::: details
a. Invertibile su $\boxed{(-\infty,-7] \text{ oppure } [-7,\infty)}$; per il secondo (ove $x+7 \ge 0$),
$$\begin{aligned}
y &= (x+7)^2
\\
\sqrt y & = x+7
\\
x & = \sqrt{y}-7
\end{aligned}$$
e quindi $\boxed{f^{-1}(y) = \sqrt{y}-7}$.

b. Invertibile su $\boxed{(-\infty,6] \text{ oppure } [6,\infty)}$; per il seconodo intervallo
$$\begin{aligned}
y &= (x-6)^2
\\
\sqrt y & = x-6
\\
x & = \sqrt{y}+6
\end{aligned}$$
e quindi $\boxed{f^{-1}(y) = \sqrt{y}+6}$.

c. Invertibile su $\boxed{(-\infty,0] \text{ oppure } [0,\infty)}$; per il secondo, $\boxed{f^{-1}(y) = \sqrt{y+5}}$
:::
