export default function handler(req, res) {
  res.status(200).json({
    message: 'Mock scrape started for @dolphinvntg',
    listings: [
      { title: 'Vintage Nike Jacket', image: '/logo.png' },
      { title: 'Y2K Denim Mini Skirt', image: '/logo.png' }
    ]
  });
}
