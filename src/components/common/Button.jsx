import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  type = 'button',
  className = '',
  disabled = false,
  ...props 
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-bright-green focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-primary-bright-green text-black hover:bg-primary-neon-green hover:shadow-[0_0_20px_rgba(0,255,0,0.5)]',
    secondary: 'bg-transparent border-2 border-primary-bright-green text-primary-bright-green hover:bg-primary-bright-green hover:text-black',
    outline: 'bg-black/40 backdrop-blur-sm border border-primary-bright-green/30 text-primary-bright-green hover:border-primary-bright-green hover:bg-primary-bright-green/10',
    ghost: 'bg-transparent text-primary-bright-green hover:bg-primary-bright-green/10',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  }
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
