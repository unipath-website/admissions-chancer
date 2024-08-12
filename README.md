# Admissions chancing

This is meant to be the main feature of Unipath. The user would input
their coursework as well as any test scores and extracurricular
activities for supplemental application purposes.

## Process

This program uses admissions data from CUDO to create normal
distributions of grades. This would serve as exact data showing
applicant's grades and using the provided applicant and acceptance
counts, I can estimate median accepted averages. With that, I would be
able to estimate grade ranges for acceptance.

**Example Data for the Faculty of Arts and Science at the University of
Toronto - St. George**

| Program        | 95+ | 90-94 | 85-89 | 80-84 | 75-79 | 70-74 | <70 |
|----------------|-----|-------|-------|-------|-------|-------|-----|
| Soc. Sci.      |     |       |       |       |       |       |     |
| Phys/Math Sci. |     |       |       |       |       |       |     |
| Humanities     |     |       |       |       |       |       |     |
| Life Sciences  |     |       |       |       |       |       |     |
| Rotman Comm.   |     |       |       |       |       |       |     |
| Computer Sci.  |     |       |       |       |       |       |     |

| Program                            | Mean | Standard Deviation |
|------------------------------------|------|--------------------|
| Social Science                     |      |                    |
| Physical and Mathematical Sciences |      |                    |
| Humanities                         |      |                    |
| Life Sciences                      |      |                    |
| Rotman Commerce                    |      |                    |
| Computer Science                   |      |                    |


Applicant count, standard deviation, and average \"top 6\"

I used the data like that shown to produce normal distributions of
accepted applicant's grades.

When the user inputs their top 6 average, the program would generate a
z-score considering their average and the mean and standard deviation
for the chosen university program, and use that z-score to calculate a
probability of admission.

To calculate probability, one would usually use a Z-table to find the
probability that corresponds to the Z-score computed. In order to keep
the program efficient and accurate, it was decided that the best way to
calculate probability is to calculate definite integrals of the
distributions by finding the indefinite integral of the normal
distribution.

$$\int_{}^{}\frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{1}{2}(\frac{x-\mu}{\sigma})^2}dx$$

$$= \frac{1}{2}+\frac{1}{2}\mathop{\mathrm{erf}}(\frac{x-\mu}{\sigma\sqrt{2}})$$
