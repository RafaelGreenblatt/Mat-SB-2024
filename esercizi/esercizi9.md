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


## Esercizio

Si calcolino i seguenti integrali:

a. $\int\left(\sqrt x - \frac1{\sqrt x} \right) \, d x$
b. $\int\left(e^{2x} - \frac12 e^{x/2} \right) \, d x$
c. $\int \frac{dx}{2x}$
d. $\int \frac{x-1}{x^2} d x$
e. $\int_0^\pi (\sin x - \cos x) d x$
f. $\int_0^{\pi/2} (x - \sin x) d x$

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
\int \frac{x-1}{x^2} dx = \int \frac{dx}x - \int \frac{dx}{x^2}
= \boxed{\ln x + \frac1x + C}.
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
\int (x-\sin x) dx 
= 
\frac{x^2}2 + \cos x + C,
$$
quindi
$$
\int_0^{\pi/2} (x- \sin x) dx
=
\frac{x^2}2 + \cos x 
\, \Bigg|_{x=0}^\pi
=
\boxed{\frac{\pi^2}8 - 1}.
$$
:::
