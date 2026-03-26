import reviewsContent from '../content/reviews.json'
import { withDelay } from '../utils/withDelay'
import { RatingPaws } from './ui/RatingPaws'

export function ReviewsSection() {
  return (
    <section
      id="kundenstimmen"
      className="card span-5 anchor-target"
      style={withDelay(420)}
      aria-labelledby="kundenstimmen-title"
    >
      <div className="reviews">
        <h2 id="kundenstimmen-title" className="section-title tahu">
          {reviewsContent.title}
        </h2>
        <div className="review-list">
          {reviewsContent.items.map((review) => (
            <article className="review" key={review.author}>
              <RatingPaws label={reviewsContent.ratingLabel} />
              <p className="review-text">{review.text}</p>
              <p className="review-author">- {review.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
