<!--@include: ../notation.md-->

<style scoped>
h1 {
    counter-reset: h2
}
h2:after {
    counter-increment: h2;
    content: "10." counter(h2) 
}

ol {list-style-type: lower-alpha;}
</style>

# Esercizi - Settimana 10

## Esecizio

Calcolare le seguenti integrali, usando integrazione per parti:

1. $$\int x \cos x  \, d x$$
2. $$\int_0^2 x \, e^{-2x} \, dx$$

::: details
1. Scegliendo
$$
f(x) = x, \quad g(x) = \sin x
$$
e quindi
$$
f'(x) = 1, \quad g'(x) = \cos x,
$$
abbiamo
$$
\int x \cos x  \, d x
=
x \sin x - \int \sin x \, dx
=
\boxed{x \sin x + x \cos x + C}.
$$
2. Scegliendo
$$
f(x) = x, \quad g(x) = -\frac12 e^{-2x}
$$
e quindi
$$
f'(x) = 1, \quad g'(x) = e^{-2x},
$$
abbiamo
$$
\int_0^2 x \, e^{-2x} \, dx
=
-\frac{x}{2} e^{-2x}
\Bigg|_{x=0}^2
+
\frac12 \int_0^2 e^{-2x} \, dx
;
$$
poi
$$
\int_0^2 e^{-2x} \, dx
=
- \frac12 e^{-2x} \Bigg|_{x=0}^2
=
-\frac12 e^{-4} + \frac12
,
$$
e quindi
$$
\int_0^2 x \, e^{-2x} \, dx
=
-e^{-4}
+
\frac12 \left( 
-\frac12 e^{-4} + \frac12
\right)
=
\boxed{\frac14 - \frac54 e^{-4}}
.
$$
:::

## Esercizio

Calcolare le seguenti integrali, integrando per sostituzione:

1. $$\int \tan x \, dx$$
2. $$\int \frac{e^x}{1 + \exp (2x)} \, dx$$

::: details
1. Ricordando $\tan x = \frac{\sin x}{\cos x}$, ponendo $y = \cos x$ in modo tale che $dy = - \sin x \, dx$,
$$
\int \tan x \, dx
=
- \int \frac{dy}{y}
=
- \log y + C
=
\boxed{-\log(\cos x) + C}.
$$
2. Mettendo $y = e^x$, quindi $dy = e^x dx$,
$$\int \frac{e^x}{1 + \exp (2x)} \, dx
= 
\int \frac{dy}{1 + y^2} dy
=
\arctan y + C
=
\boxed{\arctan (e^x) + C}
.
$$
:::

## Esercizio

Calcolare le seguenti integrali:

1. $$\int \frac{\sin x}{\cos^3 x} \, dx$$
2. $$ \int x^3 \ln x \, dx $$
3. $$\int_0^\pi \sin x \, e^{\cos x} \, dx$$

::: details
1. Integrando per sostituzione con $y = \cos x$,
$$\int \frac{\sin x}{\cos^3 x} \, dx
=
-\int \frac{dy}{y^3}
=
\frac12 y^{-2} + C
=
\boxed{\frac1{2 \cos^2 x}+C}
.
$$
2. Integrando per parti,
$$ \int x^3 \ln x \, dx 
= \frac14 x^4 \ln x - \frac14 \int x^3 dx
=
\boxed{\frac14 x^4 \ln x - \frac{x^4}{16} + C}
.
$$
3. Integrando per sostituzione con $y = \cos x$,
$$\int_0^\pi \sin x \, e^{\cos x} \, dx
=
- 
\int_1^{-1} e^y \, dy
=
\int_{-1}^1 e^y \, dy
=
\boxed{e - \frac1e}
.
$$
:::
