import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import img from '~/assets/bg-login.png'
import logo from '~/assets/logo.png'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { EyeIcon, EyeOffIcon, Lock, Mail, User } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { EMAIL_RULE, EMAIL_RULE_MESSAGE, FIELD_REQUIRED_MESSAGE, PASSWORD_RULE, PASSWORD_RULE_MESSAGE } from '~/utils/validators'
import { registerUserAPI } from '~/apis'
import { useToast } from '~/hooks/use-toast'
import { ACCOUNT_ROLE } from '~/utils/constants'

function Register() {
  const navigate = useNavigate()
  const { toast } = useToast()

  const formSchema = z.object({
    name: z.string().min(1, FIELD_REQUIRED_MESSAGE).max(50),
    email: z.string().min(1, FIELD_REQUIRED_MESSAGE).max(50).regex(EMAIL_RULE, EMAIL_RULE_MESSAGE),
    password: z.string().min(1, FIELD_REQUIRED_MESSAGE).max(50).regex(PASSWORD_RULE, PASSWORD_RULE_MESSAGE)
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  function onSubmit(values) {
    registerUserAPI({ ...values, role: ACCOUNT_ROLE.CLIENT }).then((res) => {
      if (!res.error) {
        toast({
          variant: 'success',
          title: 'Thông báo',
          description: 'Đăng ký thành công! Vui lòng đăng nhập để tiếp tục.'
        })
        navigate('/login')
      }
    })
  }

  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible((prevState) => !prevState)

  return (
    <div className='w-[100vw] h-[100vh] grid grid-cols-4 bg-[#F1F3F6]'>
      <div className='col-span-1 h-full bg-white flex items-center justify-center' style={{ boxShadow: '24.23px 0px 50.49px 0px #0000000D' }}>
        <div className='w-full px-6'>
          <div className='flex items-center justify-center gap-6 mb-2 cursor-pointer' onClick={() => navigate('/')}>
            <img src={logo} alt="" className='w-6' />
            <span className='text-3xl'>PNJ</span>
          </div>
          <div className='text-center font-semibold text-gray-400 mb-10'>Sign up your account</div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='font-nunito'>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className='mb-4'>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <div className='flex items-stretch h-fit relative'>
                        <Input
                          placeholder="Nguyen Van A"
                          className='pe-20 bg-muted outline-none border-none focus:border-none focus-visible:ring-0'
                          {...field}
                        />
                        <div className='bg-gray-900 text-white p-2 flex items-center justify-center aspect-square rounded-md absolute right-0' >
                          <User className='w-5 h-4'/>
                        </div>
                      </div>

                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className='mb-4'>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <div className='flex items-stretch h-fit relative'>
                        <Input
                          placeholder="alex@gmail.com"
                          className='pe-20 bg-muted outline-none border-none focus:border-none focus-visible:ring-0'
                          {...field}
                        />
                        <div className='bg-gray-900 text-white p-2 flex items-center justify-center aspect-square rounded-md absolute right-0' >
                          <Mail className='w-5 h-4'/>
                        </div>
                      </div>

                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className='mb-2'>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative flex">
                        <Input
                          className="pe-20 bg-muted outline-none border-none focus:border-none focus-visible:ring-0"
                          placeholder="Enter your password"
                          type={isVisible ? 'text' : 'password'}
                          {...field}
                        />
                        <button
                          className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 right-10 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                          type="button"
                          onClick={toggleVisibility}
                          aria-label={isVisible ? 'Hide password' : 'Show password'}
                          aria-pressed={isVisible}
                          aria-controls="password"
                        >
                          {isVisible ? (
                            <EyeOffIcon size={16} aria-hidden="true" />
                          ) : (
                            <EyeIcon size={16} aria-hidden="true" />
                          )}
                        </button>
                        <div className='bg-gray-900 text-white p-2 flex items-center justify-center aspect-square rounded-md absolute right-0' >
                          <Lock className='w-5 h-4'/>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


              <Button type="submit" className='w-full hover:drop-shadow-2xl mt-10'>Signup Now</Button>
            </form>
          </Form>

          <div className='my-10 flex items-center gap-4'>
            <div className='h-px border-t-[2px] border-gray-300 w-full'></div>
            <span className='text-gray-400'>OR</span>
            <div className='h-px border-t-[2px] border-gray-300 w-full'></div>
          </div>

          <Link to='/login'><Button variant='outline' className='w-full border-gray-800'>Login now</Button></Link>

        </div>
      </div>
      <div className='col-span-3 flex items-center justify-center'>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Register