import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Copy, Coffee, Check, Sparkles, FileText, Brain, Book } from 'lucide-react';
import { genAI } from '@/lib/gemini';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const SupportBox = () => (
  <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 mb-8">
    <div className="text-center space-y-4">
      <Coffee className="h-12 w-12 mx-auto text-blue-500" />
      <h2 className="text-2xl font-bold">Support Our Work ❤️</h2>
      <p className="text-gray-600 max-w-xl mx-auto">
        Help us maintain and improve our AI tools by supporting our API & hosting costs. 
        Your contribution helps keep this tool free for everyone! 🙏
      </p>
      <a
        href="https://roihacks.gumroad.com/coffee"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Button 
          size="lg" 
          className="text-lg px-8 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
        >
          <Coffee className="mr-2 h-5 w-5" />
          Buy Us a Coffee ☕
        </Button>
      </a>
    </div>
  </Card>
);

export default function Home() {
  const [paperContent, setPaperContent] = useState('');
  const [abstract, setAbstract] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateAbstract = async () => {
    if (!paperContent.trim()) return;
    
    setLoading(true);
    setError(null);
    try {
      if (!genAI) {
        throw new Error("API key not configured. Please add your Gemini API key to continue.");
      }
      
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Generate a professional scientific paper abstract based on this content: ${paperContent}. 
      The abstract should be concise (100-300 words), well-structured, and follow academic writing best practices.
      Include the context, objective, methods, results, and conclusions.
      Make it suitable for academic publication.`;
      
      const result = await model.generateContent(prompt);
      setAbstract(result.response.text().trim());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while generating the abstract');
      setAbstract('');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(abstract);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 py-4">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text leading-tight">
            AI Abstract Generator ✨
          </h1>
          <p className="text-xl text-gray-600">
            Generate professional scientific paper abstracts in seconds! 🚀
          </p>
        </div>
        
        <div className="gradient-border mb-8">
          <div className="p-8">
            <div className="space-y-6">
              <Textarea
                placeholder="✍️ Paste your scientific paper content or describe your research..."
                value={paperContent}
                onChange={(e) => setPaperContent(e.target.value)}
                className="min-h-[200px] text-lg border-2 focus:border-blue-400"
              />
              
              <Button 
                onClick={generateAbstract}
                disabled={loading || !paperContent.trim()}
                className="w-full text-lg py-6 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
              >
                {loading ? (
                  <>
                    <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                    Generating Abstract...
                  </>
                ) : (
                  <>
                    <FileText className="mr-2 h-5 w-5" />
                    Generate Abstract ✨
                  </>
                )}
              </Button>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>

        {abstract && (
          <div className="space-y-6 mb-12">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Generated Abstract</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 hover:bg-blue-50"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </Button>
                </div>
                <div className="prose prose-blue max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {abstract}
                  </ReactMarkdown>
                </div>
              </div>
            </Card>
          </div>
        )}

        <SupportBox />

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 mb-16">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
              Free AI Abstract Generator: Create Perfect Scientific Paper Abstracts in Seconds ⚡
            </h2>
            
            <div className="space-y-8">
              <p className="text-gray-600 leading-relaxed">
                Need help writing your scientific paper abstract? Our free AI-powered abstract generator
                combines advanced artificial intelligence with academic writing expertise to help you create
                professional, well-structured abstracts for your research papers.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Brain className="h-6 w-6 text-blue-500" />
                  Why Choose Our AI Abstract Generator? 🎯
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">🚀</span>
                    <span>Instant generation of professional academic abstracts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🤖</span>
                    <span>AI-powered technology that understands academic writing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">📚</span>
                    <span>Follows scientific writing best practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">💡</span>
                    <span>Perfect for researchers and academics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✨</span>
                    <span>Free to use with professional-quality results</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Book className="h-6 w-6 text-blue-500" />
                  Perfect for All Research Fields 📚
                </h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Life Sciences and Medicine</li>
                  <li>• Physical Sciences and Engineering</li>
                  <li>• Social Sciences and Humanities</li>
                  <li>• Computer Science and Technology</li>
                  <li>• Environmental Sciences</li>
                  <li>• Business and Economics</li>
                  <li>• Psychology and Behavioral Sciences</li>
                  <li>• Education and Pedagogy</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Key Features of Our Abstract Generator 🌟
                </h2>
                <ul className="space-y-2 text-gray-600">
                  <li>• Structured format following academic standards</li>
                  <li>• Clear presentation of research objectives</li>
                  <li>• Concise methodology description</li>
                  <li>• Key findings and results summary</li>
                  <li>• Impactful conclusions</li>
                  <li>• Professional academic language</li>
                  <li>• Optimal length (100-300 words)</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Tips for Better Abstracts 💡
                </h2>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                  <li>Provide detailed research context</li>
                  <li>Include clear research objectives</li>
                  <li>Describe your methodology</li>
                  <li>Highlight key findings</li>
                  <li>State significant conclusions</li>
                </ol>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                  Why Good Abstracts Matter 🎯
                </h2>
                <p className="text-gray-600">
                  A well-written abstract is crucial for:
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Increasing paper visibility</li>
                  <li>• Attracting readers to your research</li>
                  <li>• Improving chances of publication</li>
                  <li>• Facilitating literature searches</li>
                  <li>• Communicating research impact</li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        <SupportBox />
      </div>
    </div>
  );
}