import React, { useState } from "react";
import { useParams } from "react-router-dom";
import GPTImage from "../assets/images/GPT5Main.jpg"; // Image for the overlay

const ArticleContent = () => {
  const { id } = useParams(); // Get the article ID from the URL

  // Sample article data with detailed content and images
  const articleDetails = [
    {
      id: 1,
      title: "Breaking: GPT-5 Launch Announced",
      image: GPTImage,
      content: [
        {
          subtitle: "Introduction to GPT-5",
          text: `
            OpenAI has introduced GPT-5, marking a groundbreaking advancement in artificial intelligence. 
            With the ability to perform tasks requiring deep language comprehension, reasoning, and multimodal 
            processing, GPT-5 represents a leap forward in generative AI technology. 
            
            GPT-5 is built to overcome limitations of its predecessor, GPT-4, offering superior accuracy, 
            faster response times, and enhanced scalability. This new generation of AI is equipped to address 
            complex challenges across various domains, such as scientific research, content creation, and industry-specific 
            applications.
          `,
        },
        {
          subtitle: "Key Features of GPT-5",
          text: `
            GPT-5 comes with a host of innovative features that set it apart from earlier models:
            
            1. **Unprecedented Context Understanding**: GPT-5 can handle multi-turn conversations, remembering context and user intent over long interactions.
            2. **Multimodal Support**: In addition to text and image processing, GPT-5 introduces limited video understanding and even basic audio analysis capabilities.
            3. **Dynamic Learning**: The model can learn and adapt in real-time based on user inputs, making it smarter and more effective with continued use.
            4. **Emotion Detection**: GPT-5 can recognize and respond to user emotions, ensuring a more personalized and empathetic interaction.
            5. **Lower Latency**: Optimizations in its architecture reduce response times, enhancing user experience in real-time applications.
          `,
        },
        {
          subtitle: "Improved Multimodal Capabilities",
          text: `
            Building on GPT-4’s multimodal abilities, GPT-5 pushes boundaries with its ability to process and 
            generate content that integrates text, images, and video seamlessly. For example:
            
            - **Video Summarization**: GPT-5 can analyze and summarize videos, providing concise, insightful descriptions.
            - **Audio to Text with Contextualization**: It can transcribe audio while providing contextual insights, 
              making it ideal for applications in podcast summaries or meeting notes.
            - **Creative Media Production**: Generate cohesive multimedia content for marketing, education, or entertainment purposes.
          `,
        },
        {
          subtitle: "Advanced Use Cases in Industry",
          text: `
            GPT-5 is designed to revolutionize various sectors. Here’s how it’s making an impact:
            
            - **Healthcare**: Automating medical documentation, providing accurate symptom analysis, and assisting in patient education.
            - **Education**: Creating interactive, personalized learning modules for students of all ages.
            - **Business Operations**: Enhancing productivity with intelligent scheduling, email drafting, and decision-making assistance.
            - **Gaming and Entertainment**: Designing immersive storytelling experiences, character dialogues, and interactive worlds.
          `,
        },
        {
          subtitle: "Ethical Considerations and Challenges",
          text: `
            As with any advanced AI, GPT-5 raises questions about ethical usage, data privacy, and fairness. 
            OpenAI has taken steps to mitigate these concerns, including:
            
            - Enhanced bias detection and mitigation during training.
            - Transparency in how GPT-5 processes and generates outputs.
            - Guidelines to prevent misuse in areas like disinformation or harmful content generation.
            
            However, ongoing collaboration between developers, policymakers, and researchers is necessary to ensure ethical deployment.
          `,
        },
        {
          subtitle: "GPT-5 vs. Previous Generations",
          text: `
            GPT-5 brings several improvements compared to earlier iterations like GPT-3 and GPT-4:
            
            - **Training Dataset**: The dataset used for GPT-5 is significantly larger and more diverse, ensuring better global applicability.
            - **Processing Speed**: Response times have been reduced by up to 50%, ensuring smoother user experiences.
            - **Accuracy**: GPT-5 delivers fewer hallucinations (incorrect responses), thanks to improved fine-tuning mechanisms.
            - **Customization**: Users can now fine-tune GPT-5 more effectively for specific tasks or industries.
          `,
        },
        {
          subtitle: "Future Developments and Vision",
          text: `
            GPT-5 is not just a milestone but a foundation for the future of AI. OpenAI envisions further integration of 
            AI into daily life, empowering users with tools that amplify creativity, productivity, and learning. 
            Upcoming advancements may include:
            
            - Fully multimodal models that seamlessly integrate text, video, and sensory inputs.
            - Specialized AI models for critical sectors like healthcare and climate research.
            - Improved democratization of AI technology, making it more accessible to small businesses and individuals.
          `,
        },
      ],
    },
    
    
    // Add more articles here...
  ];

  // Find the article based on ID
  const article = articleDetails.find((article) => article.id === parseInt(id));

  if (!article) return <p>Article not found</p>; // Show if no article found

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
    // Smooth scroll to the section
    const section = document.getElementById(`section-${index}`);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#F7F2E7]">
  {/* Top Section: Fullscreen Image with Title Overlay */}
  <div className="relative w-full h-[50vh] md:h-[80vh] mb-16">
    <img
      src={article.image}
      alt={article.title}
      className="absolute inset-0 w-full h-full object-cover brightness-75 animate-zoom-in"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
    <div className="relative z-10 h-full flex items-end justify-center">
      <h1 className="text-4xl md:text-7xl font-extrabold text-white md:text-center px-4 leading-snug">
        {article.title}
      </h1>
    </div>
  </div>

  {/* Main Content */}
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    <div className="md:flex gap-8">
      {/* Sticky Index Section */}
      <div className="w-full md:w-1/4 h-full  bg-[#59257c] rounded-xl shadow-md p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Contents</h3>
        <div className="space-y-4">
          {article.content.map((section, index) => (
            <p
              key={index}
              onClick={() => handleClick(index)}
              className={`cursor-pointer text-lg text-white hover:underline ${
                activeIndex === index ? "font-bold" : ""
              }`}
            >
              {section.subtitle}
            </p>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-3/4">
        {article.content.map((section, index) => (
          <div
            key={index}
            id={`section-${index}`}
            className={`mb-12 ${
              activeIndex === index ? "border-l-4 border-[#59257c] text-[] pl-4" : ""
            }`}
          >
            <h2 className="text-3xl font-semibold text-[#00264C] mt-6 mb-4">
              {section.subtitle}
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              {section.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default ArticleContent;
