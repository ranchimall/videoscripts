export const mathematiciansData = [
  {
    id: "mirzakhani",
    name: "Maryam Mirzakhani",
    nativeName: "مریم میرزاخانی",
    lifespan: "1977 – 2017",
    nationality: "Iranian / American",
    institution: "Stanford University",
    medal: "Fields Medal (2014)",
    medalSubtitle: "First woman recipient of the Fields Medal",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Maryam_Mirzakhani_in_Seoul_2014.jpg/800px-Maryam_Mirzakhani_in_Seoul_2014.jpg",
    field: "Hyperbolic Geometry & Moduli Spaces",
    citation: "For her outstanding contributions to the dynamics and geometry of Riemann surfaces and their moduli spaces.",
    breakthrough: "Moduli Space Volume & Geodesic Dynamics",
    summary: "Discovered groundbreaking connections between hyperbolic geometry, symplectic topology, and dynamical systems on curved multi-holed surfaces.",
    keyPoints: [
      { label: "Moduli Volumes", detail: "Calculated Weil-Petersson volumes of moduli spaces of bordered Riemann surfaces, leading to a new proof of Witten's conjecture." },
      { label: "Magic Wand Theorem", detail: "Proved with Alex Eskin that closures of SL(2, ℝ) orbits in moduli space are rigid complex algebraic subvarieties." },
      { label: "Geodesic Asymptotics", detail: "Derived explicit polynomial growth rates for simple closed geodesics of given length on hyperbolic Riemann surfaces." }
    ],
    signatureEquation: "\\lim_{L \\to \\infty} \\frac{N(X, L)}{L^{6g-6+2n}} = c(X)",
    accentColor: "gold"
  },
  {
    id: "tao",
    name: "Terence Tao",
    nativeName: "陶哲轩",
    lifespan: "1975 – Present",
    nationality: "Australian / American",
    institution: "UCLA",
    medal: "Fields Medal (2006)",
    medalSubtitle: "Recognized for breathtaking breadth and universal mastery",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Terence_Tao_2019.jpg/800px-Terence_Tao_2019.jpg",
    field: "Harmonic Analysis, PDE, Number Theory & Compressed Sensing",
    citation: "For his contributions to partial differential equations, combinatorics, harmonic analysis and additive number theory.",
    breakthrough: "Green-Tao Theorem & Arithmetic Progressions in Primes",
    summary: "Proved with Ben Green that prime numbers contain arbitrarily long arithmetic progressions, uniting ergodic theory, combinatorics, and Fourier analysis.",
    keyPoints: [
      { label: "Primes in Progression", detail: "Established that there are arbitrarily long sequences of primes of the form a, a+d, a+2d, ..., a+(k-1)d." },
      { label: "Compressed Sensing", detail: "Co-founded the rigorous mathematical theory allowing full reconstruction of images/signals from sparse, undersampled measurements." },
      { label: "Dispersive PDEs", detail: "Solved critical threshold conjectures for wave maps and nonlinear Schrödinger equations using multilinear spacetime estimates." }
    ],
    signatureEquation: "\\pi(x; k, d) \\implies \\forall k \\ge 3, \\, \\exists \\text{ AP of primes}",
    accentColor: "gold"
  },
  {
    id: "perelman",
    name: "Grigori Perelman",
    nativeName: "Григорий Перельман",
    lifespan: "1966 – Present",
    nationality: "Russian",
    institution: "Steklov Mathematical Institute",
    medal: "Fields Medal (2006 - Declined)",
    medalSubtitle: "Resolved the 100-year-old Poincaré Millennium Problem",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Grigori_Perelman_2011_%28cropped%29.jpg/800px-Grigori_Perelman_2011_%28cropped%29.jpg",
    field: "Geometric Analysis & Differential Geometry",
    citation: "For his contributions to geometry and his revolutionary insights into the analytical and geometric structure of the Ricci flow.",
    breakthrough: "Proof of Poincaré & Thurston Geometrization Conjectures",
    summary: "Utilized Richard Hamilton's Ricci Flow with surgery to prove the Geometrization Conjecture, classifying all compact 3-dimensional manifolds.",
    keyPoints: [
      { label: "Poincaré Conjecture", detail: "Proved that every simply connected, closed 3-dimensional manifold is homeomorphic to the 3-dimensional sphere." },
      { label: "Ricci Flow with Surgery", detail: "Introduced the W-entropy functional and monotonicity formulas to safely navigate past finite-time geometric singularities." },
      { label: "Soul Conjecture", detail: "Previously resolved Cheeger-Gromoll's Soul Conjecture in Riemannian geometry with a legendary 4-page proof in 1994." }
    ],
    signatureEquation: "\\frac{\\partial g_{ij}}{\\partial t} = -2 R_{ij}",
    accentColor: "gold"
  },
  {
    id: "grothendieck",
    name: "Alexander Grothendieck",
    nativeName: "Alexandre Grothendieck",
    lifespan: "1928 – 2014",
    nationality: "Stateless / French",
    institution: "IHÉS",
    medal: "Fields Medal (1966)",
    medalSubtitle: "The Supreme Architect of Modern Algebraic Geometry",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Grothendieck.jpg/800px-Grothendieck.jpg",
    field: "Algebraic Geometry, Category Theory & Homological Algebra",
    citation: "For building on work of Weil and Zariski and effecting fundamental advances in algebraic geometry.",
    breakthrough: "Schemes, Topoi, and Grothendieck-Riemann-Roch",
    summary: "Rebuilt algebraic geometry from its foundations using scheme theory and sheaf cohomology, providing the exact language for modern arithmetic.",
    keyPoints: [
      { label: "Grothendieck-Riemann-Roch", detail: "Generalized Hirzebruch's theorem from individual algebraic varieties to morphisms between schemes." },
      { label: "Étale Cohomology & Motives", detail: "Constructed the cohomology theories and philosophical blueprint required to prove the legendary Weil Conjectures." },
      { label: "Monumental Foundations", detail: "Authored thousands of pages (EGA & SGA) creating schemes, fibered categories, topoi, and descent theory." }
    ],
    signatureEquation: "\\operatorname{ch}(f_! \\mathcal{F}) \\operatorname{td}(Y) = f_* (\\operatorname{ch}(\\mathcal{F}) \\operatorname{td}(X))",
    accentColor: "gold"
  },
  {
    id: "scholze",
    name: "Peter Scholze",
    nativeName: "Peter Scholze",
    lifespan: "1987 – Present",
    nationality: "German",
    institution: "Max Planck Institute / University of Bonn",
    medal: "Fields Medal (2018)",
    medalSubtitle: "Awarded at age 30 for transformative arithmetic geometry",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Peter_Scholze_2018.jpg/800px-Peter_Scholze_2018.jpg",
    field: "Arithmetic Algebraic Geometry & p-adic Hodge Theory",
    citation: "For transforming arithmetic algebraic geometry over p-adic fields through his introduction of perfectoid spaces.",
    breakthrough: "Theory of Perfectoid Spaces",
    summary: "Introduced perfectoid spaces, creating a magical tilting equivalence bridging geometry in characteristic 0 with characteristic p.",
    keyPoints: [
      { label: "Tilting Equivalence", detail: "Showed arithmetic geometry over p-adic fields can be transferred into characteristic p where Frobenius is surjective." },
      { label: "Local Langlands", detail: "Constructed Galois representations for torsion classes in the cohomology of Shimura varieties and hyperbolic 3-manifolds." },
      { label: "Condensed Mathematics", detail: "Co-created with Dustin Clausen a reformulation of topology to unite algebra, geometry, and analysis without pathology." }
    ],
    signatureEquation: "X^{\\flat} = \\varprojlim_{x \\mapsto x^p} X",
    accentColor: "gold"
  },
  {
    id: "huh",
    name: "June Huh",
    nativeName: "허준이",
    lifespan: "1983 – Present",
    nationality: "American / South Korean",
    institution: "Princeton University",
    medal: "Fields Medal (2022)",
    medalSubtitle: "Bridged Algebraic Geometry & Discrete Combinatorics",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/June_Huh_2022.jpg/800px-June_Huh_2022.jpg",
    field: "Combinatorial Algebraic Geometry",
    citation: "For bringing the ideas of Hodge theory to combinatorics, the proof of the Dowling-Wilson conjecture for geometric lattices, and the Heron-Rota-Welsh conjecture.",
    breakthrough: "Hodge Theory for Matroids & Log-Concavity",
    summary: "Discovered that purely discrete combinatorial structures (graphs and matroids) obey deep geometric laws like the Hard Lefschetz theorem.",
    keyPoints: [
      { label: "Read's Conjecture", detail: "Proved that the coefficients of the chromatic polynomial of any graph form a strictly log-concave sequence." },
      { label: "Rota's Conjecture", detail: "Proved with Karim Adiprasito and Eric Katz that the characteristic polynomial coefficients of any matroid are log-concave." },
      { label: "Lorentzian Polynomials", detail: "Developed a sweeping framework unifying discrete convexity, stable polynomials, and continuous volume polynomials." }
    ],
    signatureEquation: "a_k^2 \\ge a_{k-1} \\cdot a_{k+1} \\quad (\\text{Log-Concave Sequence})",
    accentColor: "gold"
  },
  {
    id: "villani",
    name: "Cédric Villani",
    nativeName: "Cédric Villani",
    lifespan: "1973 – Present",
    nationality: "French",
    institution: "Sorbonne Université / Institut Henri Poincaré",
    medal: "Fields Medal (2010)",
    medalSubtitle: "Master of Kinetic Theory & Optimal Transport",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/C%C3%A9dric_Villani_2015.jpg/800px-C%C3%A9dric_Villani_2015.jpg",
    field: "Mathematical Physics, Kinetic Theory & Optimal Transport",
    citation: "For his proofs of nonlinear Landau damping and convergence to equilibrium for the Boltzmann equation.",
    breakthrough: "Nonlinear Landau Damping in Plasmas",
    summary: "Proved with Clément Mouhot that electrostatic perturbations in collisionless plasmas decay exponentially through phase mixing without dissipation.",
    keyPoints: [
      { label: "Landau Damping", detail: "Mathematically solved the non-linear stability of homogeneous equilibria in the Vlasov-Poisson plasma equations." },
      { label: "Boltzmann Convergence", detail: "Quantified exact rates of convergence towards Maxwellian equilibrium in gases using optimal transport metrics." },
      { label: "Ricci Curvature Bounds", detail: "Established synthetic Ricci curvature lower bounds on metric measure spaces with John Lott and Karl-Theodor Sturm." }
    ],
    signatureEquation: "\\frac{\\partial f}{\\partial t} + v \\cdot \\nabla_x f - \\nabla \\phi \\cdot \\nabla_v f = 0",
    accentColor: "gold"
  },
  {
    id: "venkatesh",
    name: "Akshay Venkatesh",
    nativeName: "Akshay Venkatesh",
    lifespan: "1981 – Present",
    nationality: "Australian / Indian",
    institution: "Institute for Advanced Study, Princeton",
    medal: "Fields Medal (2018)",
    medalSubtitle: "Synthesizer of Dynamics, Number Theory & Topology",
    portrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Akshay_Venkatesh_2018.jpg/800px-Akshay_Venkatesh_2018.jpg",
    field: "Number Theory, Automorphic Forms & Representation Theory",
    citation: "For his synthesis of analytic number theory, homogeneous dynamics, topology, and representation theory.",
    breakthrough: "Subconvexity Problem for L-functions",
    summary: "Solved crucial cases of the subconvexity problem for automorphic L-functions and uncovered hidden arithmetic symmetries in topology.",
    keyPoints: [
      { label: "Subconvexity Bounds", detail: "Pioneered a revolutionary dynamical approach using microlocal methods and period integrals for L-functions." },
      { label: "Torsion & Cohomology", detail: "Discovered derived Hecke actions and hidden symmetries in the cohomology of locally symmetric spaces." },
      { label: "Equidistribution", detail: "Proved deep equidistribution theorems for orbits of unipotent flows in arithmetic quotients and geometric moduli spaces." }
    ],
    signatureEquation: "L\\left(\\tfrac{1}{2}, \\pi \\otimes \\chi\\right) \\ll q^{1/4 - \\delta}",
    accentColor: "gold"
  }
];
