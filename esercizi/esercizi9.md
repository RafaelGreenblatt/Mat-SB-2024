<!--@include: ../notation.md-->

<style scoped>
h1 {
    counter-reset: h2
}
h2:after {
    counter-increment: h2;
    content: "9." counter(h2) 
}

ol {list-style-type: lower-alpha;}
</style>

# Esercizi - Settimana 9

## Esecizio

Si trovi una funzione $p$ tale che $p'(t) = e^{-3t} + t$.

::: details
$$
\int (e^{-3t}+t) \, dt
=
\int e^{-3t} \, dt + \int t \, dt
= -\frac13 e^{-3t} + \frac{t^2}{2} + C
$$
quindi una soluzione (fra tante) è
$$
p(t) = \boxed{-\frac13 e^{-3t} + \frac{t^2}{2}}.
$$
:::

## Esercizio

Si calcolino i seguenti integrali:

a. $\int\left(\sqrt x - \frac1{\sqrt x} \right) \, d x$
b. $\int\left(e^{2x} - \frac12 e^{x/2} \right) \, d x$
c. $\int \frac{dx}{2x}$
d. $\int \frac{t-1}{t^2} d t$
e. $\int_0^\pi (\sin x - \cos x) d x$
f. $\int_0^{\pi/2} (y - \sin y) d y$

::: details

a. $$\begin{aligned}[t]&\int\left(\sqrt x - \frac1{\sqrt x} \right) \, d x = \int x^{1/2} dx - \int x^{-1/2} dx \\ &= \frac{x^{3/2}}{3/2} - \frac{x^{1/2}}{1/2}+C = \boxed{\frac23 x^{3/2} - 2 x^{1/2} + C}.\end{aligned}$$
Nota che si può verificare che questo è la risposta giusta calcolando 
$$ 
\frac{d}{dx} \left[ \frac23 x^{3/2} - 2 x^{1/2} + C \right]
= \sqrt{x} - \frac1{\sqrt x};
$$
i altri integrali *indefiniti* possono essere verificati nello stesso modo.

b.
$$
\int \left( e^{2x} - \frac12 e^{x/2} \right) dx
= \int e^{2x} dx - \frac12 \int e^{x/2} dx
= \boxed{\frac12 e^{2x} - e^{x/2} + C}.
$$

c. 
$$\int \frac{dx}{2x} = \frac12 \int \frac{dx}{x} = \boxed{\frac12 \ln x + C}$$

d.
$$
\int \frac{t-1}{t^2} dt = \int \frac{dt}t - \int \frac{dt}{t^2}
= \boxed{\ln t + \frac1t + C}.
$$
 
e. Per cominciare, calcoliamo l'integrale indefinito
$$
\int (\sin x - \cos x) d x
=
- \cos x - \sin x + C.
$$
Usando questo
$$ \begin{split}
& \int_0^\pi (\sin x - \cos x) dx
= - \cos x - \sin x 
\, \Bigg|_{x=0}^\pi
\\ & =
(-\cos \pi - \sin \pi) - (-\cos 0 - \sin 0)
= 
(1+0) - (-1 + 0)
= \boxed{2}
\end{split}$$

f.
$$
\int (y-\sin y) dy 
= 
\frac{y^2}2 + \cos y + C,
$$
quindi
$$
\int_0^{\pi/2} (y- \sin y) dy
=
\frac{y^2}2 + \cos y 
\, \Bigg|_{y=0}^\pi
=
\boxed{\frac{\pi^2}8 - 1}.
$$
:::
