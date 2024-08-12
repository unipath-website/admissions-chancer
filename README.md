# Introduction

I noticed that unlike in the United States, there are no tools for
Ontario high school students to help them with the university admissions
process, which is why I decided to build Unipath -- to help students
like myself better understand the university admissions system.

I wanted Unipath to have three main features, each of which will be
described and outlined in their own sections:

-   Admissions chancing -- Using a student's credentials and comparing
    them to those of accepted and rejected students to produce a chance
    of acceptance

-   Generating alternative options -- Using a student's credentials and
    their personal preferences for location, student population size, et
    cetera to suggest alternative universities and programs

-   Help with supplemental applications -- Competitive programs such as
    Business Administration at the University of Western Ontario and
    Engineering at the University of Waterloo use supplemental
    applications to get a better sense of their applicants, often
    serving as a tiebreaker between students with similar academic
    achievements

This document will outline the entirety of the process of creating
Unipath from start to finish. For an overview of statistical concepts
used in this project, see Introductory Statistics 2e. by Barbara
Illowsky, Susan Dean, et al. and published by Openstax.

# Features

## Admissions chancing

### Feature description

This is meant to be the main feature of Unipath. The user would input
their coursework as well as any test scores and extracurricular
activities for supplemental application purposes.

### Process

Using data collected from applicants using polling and data released by
universities themselves, I aimed to produce a normal distribution of
acceptance averages for as many programs as possible considering the
conditions for normal distribution. Originally, I attempted to do this
by estimating changes in admissions odds in tandem with changes in
grade-point average (GPA). I attempted to do this using CollegeVine, a
service generating odds of admission to American universities. Using the
odds of admission in comparison to GPA, I was able to model admission
chance as a function of GPA$^1$ for a number of sample schools, almost
always being modeled as a cubic function. One example of those
functions, modelling GPA vs admission probability for Boston College,
was:

$$p_{admit}(x) = 0.0005(9(x-0.8))^3 +5.2 + 1.2x$$

Using these functions, I was able to estimate the change in change in
admission probability. For admission to Boston College, this function
was:

$$p_{admit}'(x) = 1.0935(x-0.8)^2 + 1.2$$

Ultimately, I decided that this method was both ineffective and that it
could prove to be extremely inaccurate as CollegeVine considers many
other factors in calculating admission probability due to the holistic
nature of American university admissions. As a result, I decided to use
existing data from Ontario universities and applicants to create
chancing models. The majority of the data used for this was taken from
the Common University Data Ontario system and a poll of admissions
outcomes for applicants during the 2023-24 academic year.

**Final method**

My final plan was to use admissions data from CUDO to create normal
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
