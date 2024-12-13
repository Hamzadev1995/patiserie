// src/pages/Home.jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'

function Home() {
  const [latestPosts, setLatestPosts] = useState([])

  // Chargement des derniers articles lors du montage du composant
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setLatestPosts(data.slice(0, 3))) // On ne garde que les 3 premiers articles
  }, [])

  return (
    <div className="space-y-16">
      {/* Section Hero avec CTA */}
      <section className="text-center py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">
            Bienvenue sur MonBlog
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Découvrez nos articles sur le développement web,
            le design et les nouvelles technologies.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/blog">
                Voir les Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Derniers Articles */}
      <section>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Les Derniers Articles</h2>
            <Button variant="ghost" asChild>
              <Link to="/blog">
                Voir tous les articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map(post => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3">
                    {post.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home