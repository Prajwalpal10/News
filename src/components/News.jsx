import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsdata.io/api/1/news?apikey=pub_59371f3414dcd09a9c0bafdcd63453a360c89&q=stock&country=in&language=en&category=business'
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 flex flex-col justify-between">
    
       <Header/>

      
      <div className="container mx-auto  px-6">
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-white"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-900 hover:bg-gray-800 transition-all duration-300 rounded-lg shadow-xl overflow-hidden transform hover:scale-105"
              >
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover"
                    src={article.urlToImage}
                    alt={article.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">{article.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2">{article.description}</p>
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>{article.source.name}</span>
                    <span>{new Date(article.publishedAt).toLocaleString('en-US')}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
     <Footer/>
    </div>
  );
};

export default News;
