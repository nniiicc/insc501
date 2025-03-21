# Brief History of Information Science: Part 1

The emergence of computer and information science as a distinct academic discipline was shaped by two seminal contributions in the immediate post-war period. Vannevar Bush's "Science, The Endless Frontier" (1945) established the institutional framework for American science policy, creating sustainable structures for research funding and scientific autonomy. Claude Shannon's "A Mathematical Theory of Communication" (1948) provided the theoretical foundation for understanding information as a quantifiable and manipulable entity. Together, these works created the conditions—institutional and intellectual—that enabled computer and information science to develop into a rigorous academic discipline with profound practical applications.

Bush's framework ensured sustained government support for basic research, while Shannon's theory provided the mathematical tools needed to advance the field. This combination of institutional sustainability and theoretical rigor proved crucial as computer and information science evolved from wartime cryptography and calculation into a broad discipline encompassing artificial intelligence, networking, and human-computer interaction. The contemporary structure of the field—spanning theoretical computer science, information systems, and applied computing—reflects the dual legacy of Bush's institutional vision and Shannon's theoretical insights.

## Section 1: Bush's Vision and American Science Policy

Vannevar Bush's 1945 report, "Science, The Endless Frontier," established the blueprint for post-war American science policy. The report made three fundamental arguments: basic research is essential for national progress, government must fund this research as industry cannot, and scientists need autonomy to pursue research effectively. Bush positioned scientific research as vital to national defense, economic growth, and public welfare—themes that would shape computing's development.

As director of the Office of Scientific Research and Development (OSRD), Bush witnessed how wartime projects in electronic calculation and cryptography demonstrated computing's potential. This experience informed his vision for sustained federal support of basic research through a new agency, eventually realized as the National Science Foundation (NSF).

Bush's framework established key principles for computing research: civilian control, scientific autonomy, merit-based funding, and coordination between government, academia, and industry. These principles shaped the emergence of academic computer science departments in the 1950s and 1960s. His proposed "social contract" between scientists and public funded theoretical advances in algorithms and programming languages, alongside practical developments in time-sharing systems and networking.

Bush advocated a linear model of innovation where basic research leads to applied research, then development and implementation. This model influenced early computing advances like virtual memory and packet switching. ARPANET exemplified this approach, with Department of Defense funding supporting university researchers who maintained scientific independence while collaborating with industry.

However, Donald Stokes challenged this linear model in "Pasteur's Quadrant" (1997). Stokes argued that basic and applied research often occur simultaneously, citing how Pasteur's fundamental discoveries emerged from practical problems. This critique resonates with computing's history, where theoretical advances often developed alongside practical applications. For instance, research in human-computer interaction has consistently combined basic cognitive science with applied system design.

Bush's emphasis on the "scientific pipeline"—training future researchers—proved vital for computing. Universities established computer science programs to meet growing expertise demands, often with NSF support. This pipeline ensured talent flow into both theoretical and applied computing domains.

While the linear model faced valid criticism, Bush's vision fundamentally shaped American science policy and computer science's emergence as a discipline. His framework enabled computing's evolution from wartime tool to ubiquitous technology, establishing institutional structures that continue to influence the field.

## Section 2: Shannon's Mathematical Theory of Information

Claude Shannon's "A Mathematical Theory of Communication" (1948) revolutionized our understanding of information by introducing precise mathematical concepts for its quantification and transmission. The paper established information theory as a rigorous mathematical discipline with profound implications for computing and communication.

Shannon introduced several foundational concepts:

The bit (binary digit) emerged as the fundamental unit of information, defined as the amount of information needed to distinguish between two equally likely outcomes. This atomic unit provided a universal measure for information, enabling quantitative analysis of storage and transmission requirements.

Information entropy (H) quantified the average information content of a message source. For a discrete random variable X with possible values {x₁,...,xₙ} and probabilities p(x₁),...,p(xₙ), Shannon defined entropy as:
H(X) = -∑p(xᵢ)log₂p(xᵢ)

This formulation revealed that information content relates to uncertainty—more unpredictable messages carry more information. This insight proved crucial for data compression and coding theory.

Channel capacity (C) defined the maximum rate at which information can be reliably transmitted over a noisy communication channel. Shannon's channel coding theorem proved that error-free communication is possible if the transmission rate remains below channel capacity, leading to error-correcting codes.

Redundancy in communication emerged as both a challenge and tool. Shannon showed how natural languages contain inherent redundancy (estimated at about 50% for English) and how this could be exploited for both compression and error correction.

These concepts transformed multiple domains:

Digital Computing: The bit provided the theoretical foundation for binary computing architectures. Information entropy guided the design of efficient data structures and algorithms.

Communication Systems: Channel capacity theorems enabled reliable digital communication over noisy channels, underpinning modern telecommunications and networking protocols.

Cryptography: Shannon's work on secrecy systems (1949) established the mathematical basis for modern cryptography, introducing concepts like perfect secrecy and unicity distance.

Data Compression: Entropy-based bounds on data compression drove the development of practical compression algorithms, from Huffman coding to modern techniques.

During the Cold War, these theoretical advances gained strategic significance through applications in secure communications and cryptanalysis. Shannon's framework provided the mathematical tools needed to analyze and optimize information systems, enabling the digital revolution.

## References

Bush, V. (1945). Science, The Endless Frontier. United States Government Printing Office.

Hart, D. M. (1998). Forged Consensus: Science, Technology, and Economic Policy in the United States, 1921-1953. Princeton University Press.

Hafner, K., & Lyon, M. (1996). Where Wizards Stay Up Late: The Origins of the Internet. Simon & Schuster.

Pierce, J. R. (1973). The Early Days of Information Theory. IEEE Transactions on Information Theory, 19(1), 3-8.

Shannon, C. E. (1948). A Mathematical Theory of Communication. Bell System Technical Journal, 27(3), 379-423.

Shannon, C. E. (1949). Communication Theory of Secrecy Systems. Bell System Technical Journal, 28(4), 656-715.

Stokes, D. E. (1997). Pasteur's Quadrant: Basic Science and Technological Innovation. Brookings Institution Press.

Zachary, G. P. (1997). Endless Frontier: Vannevar Bush, Engineer of the American Century. Free Press.